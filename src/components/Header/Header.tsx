import { Link } from "react-router-dom";
import { Burger, Cart, Close, Heart, Logo, User } from "../media";
import { Search } from "../Search";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../types";
import { useEffect, useState } from "react";
import { getUser, logOut } from "../../redux/action-creators";

const Header = () => {
    const cart = useSelector((state: IStoreState) => state.books.cart);
    const favorites = useSelector((state: IStoreState) => state.books.favorites);
    const user = useSelector((state: IStoreState) => state.user);
    //console.log(user)
    const dispatch = useDispatch();

    useEffect(() => {
      if(localStorage.getItem("access"))
        dispatch(getUser());
    //   else
    //     window.location.pathname = "/bookstore/sign";
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [show, setShow] = useState(false);
    const handleBurgerToggle = () => {
        setShow(!show);
    }

    const handleLogOut = () => {
        setShow(false);
        dispatch(logOut());
    }

    useEffect(() => {
        if(show)
            document.body.classList.add("not-scroll");
        else
            document.body.classList.remove("not-scroll");
    }, [show]);

    return(
        <section className="header">
            <div className="container">
                <div className="header-wrap">
                    <div className="logo">
                        <Logo/>
                    </div>
                    <Search />
                    <div className="header-action">
                        <div className="header-action-container">
                            <Link to="/books/favorites">
                                <Heart/>
                            </Link>
                            {
                                favorites.length > 0 &&
                                <span className="span-counter"></span>
                            }
                        </div>
                        <div className="header-action-container header-action-cart">
                            <Link to="/books/cart">
                                <Cart/>
                            </Link>
                            {
                                cart.length > 0 &&
                                <span className="span-counter"></span>
                            }
                        </div>
                        {
                            !show &&
                            <div className={`header-action-container header-action-user${Object.keys(user.user).length ? " authorized" : ""}`}>
                                <Link to={Object.keys(user.user).length ? "/account" : "/sign"}>
                                    <User/>
                                </Link>
                            </div>
                        }
                        <div className="header-action-burger">
                            <button onClick={() => handleBurgerToggle()}>
                                {
                                    show ? 
                                    <Close/> :
                                    <Burger/>
                                }
                            </button>
                        </div>
                    </div>
                </div>
                {
                    show &&
                    <div className="header-detail">
                        <Search showDetail={setShow}/>
                        <div className="header-detail-main">
                            {
                                Object.keys(user.user).length > 0 &&
                                <div className="header-action-container">
                                    <Link to="/books/favorites" onClick={() => setShow(false)}>
                                        Favorites
                                        {
                                        favorites.length > 0 &&
                                        <span className="span-counter"></span>
                                    }
                                    </Link>
                                </div>
                            }
                            {
                                Object.keys(user.user).length > 0 &&
                                <div className="header-action-container">
                                    <Link to="/books/cart" onClick={() => setShow(false)}>
                                        Cart
                                        {
                                        cart.length > 0 &&
                                        <span className="span-counter"></span>
                                    }
                                    </Link>
                                </div>
                            }
                        </div>
                        {
                            Object.keys(user.user).length ?
                            <button className="btn-log-out" onClick={() => handleLogOut()}>Log out</button> :
                            <Link to="/sign" className="btn-log-out" onClick={() => setShow(false)}>Sign in</Link>
                        }
                        
                    </div>
                }
            </div>
        </section>
    )
}

export { Header }
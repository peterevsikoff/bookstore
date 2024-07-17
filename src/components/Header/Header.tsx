import { Link } from "react-router-dom";
import { Cart, Heart, Logo, User } from "../media";
import { Search } from "../Search";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../types";
import { useEffect } from "react";
import { getUser } from "../../redux/action-creators";

const Header = () => {
    const cart = useSelector((state: IStoreState) => state.books.cart);
    const favorites = useSelector((state: IStoreState) => state.books.favorites);
    const user = useSelector((state: IStoreState) => state.user);
    //console.log(user)
    const dispatch = useDispatch();

    useEffect(() => {
    //   if(localStorage.getItem("access"))
    //     dispatch(getUser());
    //   else
    //     window.location.pathname = "/bookstore/sign";
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                        <div className="header-action-container">
                            <Link to="/books/cart">
                                <Cart/>
                            </Link>
                            {
                                cart.length > 0 &&
                                <span className="span-counter"></span>
                            }
                        </div>
                        <div className={`header-action-container${Object.keys(user.user).length ? " authorized" : ""}`}>
                            <Link to={Object.keys(user.user).length ? "/account" : "/sign"}>
                                <User/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Header }
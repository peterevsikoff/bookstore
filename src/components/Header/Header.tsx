import { Link } from "react-router-dom";
import { Cart, Heart, Logo, User } from "../media";
import { Search } from "../Search";
import "./header.scss";
import { useSelector } from "react-redux";
import { IStoreState } from "../../types";

const Header = () => {
    const cart = useSelector((state: IStoreState) => state.books.cart);
  


    return(
        <section className="header">
            <div className="container">
                <div className="header-wrap">
                    <div className="logo">
                        <Logo/>
                    </div>
                    <Search />
                    <div className="header-action">
                        <button>
                            <Heart/>
                        </button>
                        <div className="header-action-container">
                            <Link to="/books/cart">
                                <Cart/>
                            </Link>
                            {
                                cart.length > 0 &&
                                <span className="span-counter"></span>
                            }
                        </div>
                        
                       <button>
                            <User/>
                       </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Header }
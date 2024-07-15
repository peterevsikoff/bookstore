import { Cart, Heart, Logo, User } from "../media";
import { Search } from "../Search";
import "./header.scss";

const Header = () => {
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
                        <button>
                            <Cart/>
                        </button>
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
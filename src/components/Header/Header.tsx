import { Cart, Heart, Logo, Search, User } from "../media";
import "./header.scss";

const Header = () => {
    return(
        <section className="header">
            <div className="container">
                <div className="header-wrap">
                    <div className="logo">
                        <Logo/>
                        <Cart/>
                        <User/>
                        <Heart/>
                        <Search/>
                    </div>
                </div>
            </div>
            Header
        </section>
    )
}

export { Header }
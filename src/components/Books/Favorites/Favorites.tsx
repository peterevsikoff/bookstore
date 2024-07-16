import { Link } from "react-router-dom";
import { ArrowLeft } from "../../media";
import "./favorites.scss";
import { useSelector } from "react-redux";
import { IStoreState } from "../../../types";
import { FavoriteBook } from "../FavoriteBook";

const Favorites = () => {
    const favorites = useSelector((state: IStoreState) => state.books.favorites);

    return(
        <section className="favorites">
            <div className="container">
                <div className="favorites__link">
                    <Link to="/books">
                        <ArrowLeft/>
                    </Link>
                </div>
                <h1>Favorites</h1>
                {
                    favorites.map(x => <FavoriteBook key={x.isbn13} book={x}/>)
                }
                {
                    favorites.length === 0 &&
                    <div className="empty">Your don't have any favorite books</div>
                }
            </div>
        </section>
    )
}

export { Favorites };
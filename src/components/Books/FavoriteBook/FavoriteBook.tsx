import { useDispatch } from "react-redux";
import { IBookSelectedResponse } from "../../../types";
import { Heart, Star } from "../../media";
import "./favorite-book.scss";
import { toggleFavorites } from "../../../redux/action-creators";
import { Link } from "react-router-dom";

const FavoriteBook = ({book}: {book:IBookSelectedResponse}) => {
    const dispatch = useDispatch();
    
    const handleToggleFavorites = () => {
        dispatch(toggleFavorites(book));
    }
    return(
        <div className="favorite-book">
            <div className="favorite-book__image">
                <img alt="image_book" src={book.image}/>
                <button className="btn-favorites-active" onClick={() => handleToggleFavorites()}>
                    <Heart/>
                </button>
            </div>
            <div className="favorite-book__main">
                <Link to={`/books/${book.isbn13}`}>
                    <h3>{book.title}</h3>
                </Link>
                <div className="favorite-book__subtitle">
                    <p>{book.subtitle}</p>
                </div>
                <div className="favorite-book__price">
                    <div>{book.price}</div>
                    <div className="book-card__rating">
                        {
                            new Array(5).fill({}).map((x, i) => <Star key={i} active={i < +book.rating }/>)
                        }
                    </div>
                </div>
            </div>
            
            <div className="favorite-book__delete">
                <button onClick={() => handleToggleFavorites()}>
                    <Heart/>
                </button>
            </div>
        </div>
    )
}

export { FavoriteBook };
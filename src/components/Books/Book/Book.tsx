import { Link } from "react-router-dom";
import { IBook } from "../../../types";
import { Star } from "../../media";
import "./book.scss";

const Book = ({book}: {book: IBook}) => {
    return(
        <div className="book-card">
            <div className="book-card__image">
                <img alt="image_book" src={book.image}/>
            </div>
            <Link to={`/books/${book.isbn13}`}>
                <h3>{book.title}</h3>
            </Link>
            <div className="book-card__subtitle">
                <p>{book.subtitle}</p>
            </div>
            <div className="book-card__footer">
                <span>{book.price}</span>
                <div className="book-card__rating">
                    <Star active/>
                    <Star active/>
                    <Star active/>
                    <Star active/>
                    <Star/>
                </div>
            </div>
        </div>
    )
}

export { Book };
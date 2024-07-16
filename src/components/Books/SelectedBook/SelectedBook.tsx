import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { IStoreState, TAB_SELECTED_BOOK_TYPES } from "../../../types";
import { useEffect, useState } from "react";
import { addCart, loadSelectedBook, toggleFavorites } from "../../../redux/action-creators";
import "./selected-book.scss";
import { ArrowLeft, Heart, Star } from "../../media";

const SelectedBook = () => {
    const { id = "" } = useParams();
    const dispatch = useDispatch();
    const selectedBook = useSelector((state: IStoreState) => state.books.selectedBook);
    const cart = useSelector((state: IStoreState) => state.books.cart);
    const favorites = useSelector((state: IStoreState) => state.books.favorites);
    const [tab, setTab] = useState(TAB_SELECTED_BOOK_TYPES.DESC);
    
    useEffect(() => {
        dispatch(loadSelectedBook(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleAddCart = () => {
        dispatch(addCart(selectedBook));
    }
    const handleToggleFavorites = () => {
        dispatch(toggleFavorites(selectedBook));
    }

    return(
        <section className="selected-book-section">
            <div className="container">
                <div className="selected-book__link">
                    <Link to="/books">
                        <ArrowLeft/>
                    </Link>
                </div>
                <h1>{selectedBook.title}</h1>
                <div className="selected-book__main-wrap">
                    <div className="selected-book__image">
                        <img alt="image_book" src={selectedBook.image}/>
                        <button className={`btn-favorites${favorites.some(x => x.isbn13 === selectedBook.isbn13) ? " btn-favorites-active" : ""}`} onClick={() => handleToggleFavorites()}>
                            <Heart/>
                        </button>
                    </div>
                    <div className="selected-book__details">
                        <div className="selected-book__price">
                            <span>{selectedBook.price}</span>
                            <div className="book-card__rating">
                                {
                                    new Array(5).fill({}).map((x, i) => <Star key={i} active={i < +selectedBook.rating }/>)
                                }
                            </div>
                        </div>
                        <div className="selected-book__details-table">
                            <div className="selected-book__details-row">
                                <div>Authors</div>
                                <div>{selectedBook.authors}</div>
                            </div>
                            <div className="selected-book__details-row">
                                <div>Publisher</div>
                                <div>{selectedBook.publisher}</div>
                            </div>
                            <div className="selected-book__details-row">
                                <div>Language</div>
                                <div>{selectedBook.language}</div>
                            </div>
                            <div className="selected-book__details-row">
                                <div>Format</div>
                                <div>Paper book / eBook (PDF)</div>
                            </div>
                        </div>
                        <button disabled={cart.some(x => x.book.isbn13 === selectedBook.isbn13)} onClick={() => handleAddCart()}>Add to cart</button>
                        <div className="selected-book__details-preview">
                            <a>Preview book</a>
                        </div>
                    </div>
                </div>
                <div className="selected-book__tab">
                    <div className="selected-book__tab-nav">
                        <button className={tab === TAB_SELECTED_BOOK_TYPES.DESC ? "button-active" : ""} onClick={() => setTab(TAB_SELECTED_BOOK_TYPES.DESC)}>Description</button>
                        <button className={tab === TAB_SELECTED_BOOK_TYPES.AUTHORS ? "button-active" : ""} onClick={() => setTab(TAB_SELECTED_BOOK_TYPES.AUTHORS)}>Authors</button>
                        <button>Reviews</button>
                    </div>
                    <div className="selected-book__tab-detail">
                        <p>
                            {selectedBook[tab]}
                        </p>
                    </div>
                </div>            
            </div>
        </section>
    )
}

export { SelectedBook };
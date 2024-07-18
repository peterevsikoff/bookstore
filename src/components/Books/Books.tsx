import { useDispatch, useSelector } from "react-redux";
import "./books.scss";
import { IStoreState } from "../../types";
import { useEffect } from "react";
import { getUser, loadBooks } from "../../redux/action-creators";
import { Book } from "./Book";

const Books = () => {
    const books = useSelector((state: IStoreState) => state.books.books);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadBooks());
        // if(localStorage.getItem("access"))
        //     dispatch(getUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return(
        <section className="books">
            <div className="container">
                <h1>
                    New realeases books
                </h1>
                <div className="books-wrap">
                    {
                        books.map(x => <Book key={x.isbn13} book={x}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export { Books };
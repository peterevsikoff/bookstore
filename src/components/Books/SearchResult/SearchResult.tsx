import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IStoreState } from "../../../types";
import { useEffect } from "react";
import { loadSearchBooks } from "../../../redux/action-creators";
import { Book } from "../Book";

const SearchResult = () => {
    const { searchValue = "" } = useParams();
    const dispatch = useDispatch();
    const books = useSelector((state: IStoreState) => state.books.books);
    
    useEffect(() => {
        dispatch(loadSearchBooks(searchValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);
    return(
        <section className="books">
            <div className="container">
                <h1>
                    {`'${searchValue}' search results`}
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

export { SearchResult };
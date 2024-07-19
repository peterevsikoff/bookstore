import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IStoreState } from "../../../types";
import { useEffect } from "react";
import { loadSearchBooks } from "../../../redux/action-creators";
import { Book } from "../Book";
import { Pagination } from "../Pagination";

const SearchResult = () => {
    const { searchValue = "" } = useParams();
    const dispatch = useDispatch();
    const books = useSelector((state: IStoreState) => state.books.books);
    const currentPage = useSelector((state: IStoreState) => state.books.currentPage);
    
    useEffect(() => {
        dispatch(loadSearchBooks(searchValue, currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, currentPage]);
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
                    {
                        books.length === 0 &&
                        <div className="empty">Nothing found</div>
                    }
                </div>
                <Pagination />
            </div>
        </section>
    )
}

export { SearchResult };
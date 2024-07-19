import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft } from "../../media";
import "./pagination.scss";
import { IStoreState } from "../../../types";
import { setCurrentPage } from "../../../redux/action-creators";

const Pagination = () => {
    const total = useSelector((state: IStoreState) => state.books.total);
    const currentPage = useSelector((state: IStoreState) => state.books.currentPage);
    const maxPage = Math.ceil(total / 10);
    const dispatch = useDispatch();

    if(!total) return null;
    return(
        <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => dispatch(setCurrentPage(currentPage - 1))}>
                <ArrowLeft/>
                <span className="btn-text">Prev</span>
            </button>
            <div className="pages">
                {
                    maxPage <= 5 &&
                    new Array(maxPage).fill({}).map((x, i) => 
                    <button key={i} className={i + 1 === currentPage ? "active" : ""} onClick={() => dispatch(setCurrentPage(i + 1))}>{i + 1}</button>)
                }
                {
                    maxPage > 5 &&
                    <>
                        <button className={1 === currentPage ? "active" : ""} onClick={() => dispatch(setCurrentPage(1))}>{1}</button>
                        <button className={2 === currentPage ? "active" : ""} onClick={() => dispatch(setCurrentPage(2))}>{2}</button>
                        {
                            maxPage > 4 &&
                            <>
                            {
                                currentPage > 3 &&
                                <span>...</span>
                            }
                            {
                                currentPage > 2 && currentPage <= maxPage - 2 &&
                                <button className="active" onClick={() => dispatch(setCurrentPage(currentPage))}>{currentPage}</button>
                            }
                            {
                                currentPage !== maxPage - 2 && currentPage < maxPage - 2 &&
                                <span>...</span>
                            }
                            </>
                        }
                        <button className={maxPage - 1 === currentPage ? "active" : ""} onClick={() => dispatch(setCurrentPage(maxPage - 1))}>{maxPage - 1}</button>
                        <button className={maxPage === currentPage ? "active" : ""} onClick={() => dispatch(setCurrentPage(maxPage))}>{maxPage}</button>
                    </>
                }
            </div>
            <button disabled={currentPage === maxPage} className="btn-arrow-next" onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
                <span className="btn-text">Next</span>
                <ArrowLeft/>
            </button>
        </div>
    )
}

export { Pagination };
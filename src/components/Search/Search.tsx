import { useState } from "react";
import { SearchIcon } from "../media";
import "./search.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/action-creators";

const Search = ({showDetail}: {showDetail?:Function}) => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearchClick = () => {
        dispatch(setCurrentPage(1));

        if(searchValue)
            navigate(`/books/search/${searchValue}`);
        else
            navigate(`/books`);
        if(showDetail)
            showDetail(false);
    }
    
    return(
        <div className="search" onKeyDown={(e) => { if (e.key === "Enter") handleSearchClick() }}>
            <input placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <button onClick={() => handleSearchClick()}>
                <SearchIcon/>
            </button>
        </div>
    )
}

export { Search };
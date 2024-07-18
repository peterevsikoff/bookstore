import { useState } from "react";
import { SearchIcon } from "../media";
import "./search.scss";
import { useNavigate } from "react-router-dom";

const Search = ({showDetail}: {showDetail?:Function}) => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const handleSearchClick = () => {
        if(searchValue)
            navigate(`/books/search/${searchValue}`);
        else
            navigate(`/books`);
        if(showDetail)
            showDetail(false);
    }
    
    return(
        <div className="search">
            <input placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <button onClick={() => handleSearchClick()}>
                <SearchIcon/>
            </button>
        </div>
    )
}

export { Search };
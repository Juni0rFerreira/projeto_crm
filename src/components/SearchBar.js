import React from "react";
import { GoSearch } from 'react-icons/go'



function SearchBar() {

    return (
        <div className="search">
            <div className="searchInput">
                <GoSearch/>
                <input type="text" placeholder="Pesquisar" ></input>
            </div>
        </div>
    )    

}

export default SearchBar;
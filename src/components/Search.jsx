import React, { useState } from 'react';
import './Search.css';

function Search() {
    const [searchText, setSearchText] = useState('');

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    );
}

export default Search;

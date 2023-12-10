// Search.js
import React from 'react';

const Search = ({ setSearchQuery }) => {
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            <input type="text" placeholder="Search by name" onChange={handleSearch} />
        </div>
    );
};

export default Search;

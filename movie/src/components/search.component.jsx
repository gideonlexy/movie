import React from 'react';
import './search.styles.css';

const Search = ({ search, searchValue }) => (
  <div className="search">
    <input type="text" placeholder="search" onChange={search} value={searchValue} />
  </div>
);

export default Search;

import React from 'react';
import './search.styles.css';

const Search = ({ handleChange }) => (
	<div className="search">
		<input type="text" placeholder="search" onChange={handleChange} />
	</div>
);

export default Search;

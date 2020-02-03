import React from 'react';
import './movie.styles.css';

const Movie = ({ albums, firstWord }) => (
	<div className="movie-collection">
		{albums.map(({ id, title, thumbnailUrl }) => (
			<div key={id} className="movie-item">
				<img src={thumbnailUrl} alt="Poster" />
				<span className="title">{firstWord(title)}</span>
			</div>
		))}
	</div>
);

export default Movie;

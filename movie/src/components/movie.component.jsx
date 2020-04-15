import React from 'react';
import './movie.styles.css';

const Movie = ({ albums, firstWord, searchValue }) => {
  // console.log('albums', albums);
  const filteredAlbums = albums.filter((album) => album.title.toLowerCase().includes(searchValue.toLowerCase()));
  // console.log('filterd', filteredAlbums);
  return (
    <div className="movie-collection">
      {filteredAlbums.map(({ id, title, thumbnailUrl }) => (
        <div key={id} className="movie-item">
          <img src={thumbnailUrl} alt="Poster" />
          <span className="title">{firstWord(title)}</span>
        </div>
      ))}
    </div>
  );
};

export default Movie;

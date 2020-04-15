import React from 'react';

import './App.css';

import Movie from './components/movie.component';
import Search from './components/search.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import fetchAlbumsAction from './redux/actions/fetchAlbums';
import { getAlbums, getAlbumsError, getAlbumsPending } from './redux/reducers/rootReducer';
import ClipLoader from 'react-spinners/ClipLoader';
import './components/loader.styles.css';

class App extends React.Component {
  state = {
    searchField: '',
  };
  componentDidMount() {
    const { fetchAlbums } = this.props;
    fetchAlbums();
  }

  firstWord = (title) => title.split(' ').slice(0, 1).join(' ');
  handleSearch = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { albums, pending, error } = this.props;

    return (
      <div>
        <div className="header">MOVIES</div>
        <div className="wrapper">
          <Search search={this.handleSearch} searchValue={this.state.searchField} />
          {pending ? (
            <div className="loader">
              <ClipLoader size={150} color={'#123abc'} />{' '}
            </div>
          ) : null}
          {error ? (
            <div className="error">
              <span>{error.message}</span>
            </div>
          ) : null}
          <Movie albums={albums} firstWord={this.firstWord} searchValue={this.state.searchField} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  error: getAlbumsError,
  albums: getAlbums,
  pending: getAlbumsPending,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => dispatch(fetchAlbumsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

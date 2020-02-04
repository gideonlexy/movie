import React from 'react';
import logo from './assets/banner.jpeg';
import './App.css';
import axios from 'axios';

import Movie from './components/movie.component';
import Search from './components/search.component';

import { connect } from 'react-redux';
import fetchAlbumsAction from './redux/actions/fetchAlbums';
import {
	getAlbums,
	getAlbumsError,
	getAlbumsPending
} from './redux/reducers/rootReducer';

class App extends React.Component {
	componentDidMount() {
		const { fetchAlbums } = this.props;
		fetchAlbums();
	}

	firstWord = title =>
		title
			.split(' ')
			.slice(0, 1)
			.join(' ');

	render() {
		const { albums } = this.props;
		// console.log('ALBUMS', albums);

		return (
			<div>
				<div className="header">MOVIES</div>
				<div className="wrapper">
					<Search />
					<Movie albums={albums} firstWord={this.firstWord} />
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		error: getAlbumsError(state),
		albums: getAlbums(state),
		pending: getAlbumsPending(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchAlbums: () => dispatch(fetchAlbumsAction())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';

import './App.css';

import Movie from './components/movie.component';
import Search from './components/search.component';

import { connect } from 'react-redux';
import fetchAlbumsAction from './redux/actions/fetchAlbums';
import {
	getAlbums,
	getAlbumsError,
	getAlbumsPending
} from './redux/reducers/rootReducer';

import Loader from './components/loader.component';
import ClipLoader from 'react-spinners/ClipLoader';
import './components/loader.styles.css';

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
		const { albums, pending } = this.props;

		return (
			<div>
				<div className="header">MOVIES</div>
				<div className="wrapper">
					<Search />
					{pending ? (
						<div className="loader">
							<ClipLoader size={150} color={'#123abc'} />{' '}
						</div>
					) : null}
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

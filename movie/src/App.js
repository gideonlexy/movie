import React from 'react';
// import logo from './assets/logo.jpg';
import './App.css';
import axios from 'axios';

import Movie from './components/movie.component';
import Search from './components/search.component';

class App extends React.Component {
	state = {
		albums: [],
		search: ''
	};
	componentDidMount() {
		this.getAlbums();
	}

	firstWord(title) {
		return title
			.split(' ')
			.slice(0, 1)
			.join(' ');
	}
	handleChange = e => {
		this.setState({ search: e.target.value });
	};
	getAlbums = async () => {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/photos?_limit=10'
		);
		const data = response.data;

		this.setState({ albums: data });
	};
	render() {
		const { albums, search } = this.state;
		const filteredUsers = albums.filter(album =>
			album.title.toLowerCase().includes(search.toLocaleLowerCase())
		);
		return (
			<div>
				<div className="header">{/* <img src={logo} alt="logo" /> */}</div>
				<div className="wrapper">
					<Search handleChange={this.handleChange} />
					<Movie albums={filteredUsers} firstWord={this.firstWord} />
				</div>
			</div>
		);
	}
}

export default App;

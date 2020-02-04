import * as actionTypes from './action';

export const fetchAlbumsPending = () => {
	return {
		type: actionTypes.FETCH_ALBUMS_PENDING
	};
};

export const fetchAlbumsSuceeded = albums => {
	return {
		type: actionTypes.FETCH_ALBUMS_SUCEEDED,
		albums: albums
	};
};

export const fetchAlbumsFailed = error => {
	return {
		type: actionTypes.FETCH_ALBUMS_FAILED,
		error: error
	};
};

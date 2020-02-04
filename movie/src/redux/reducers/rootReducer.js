import { createStore } from 'redux';
import * as actionTypes from '../actions/action';

export const initialState = {
	albums: [],
	pending: false,
	error: null
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_ALBUMS_PENDING:
			return {
				...state,
				pending: true
			};
		case actionTypes.FETCH_ALBUMS_SUCEEDED:
			return {
				...state,
				pending: false,
				albums: action.payload
			};
		case actionTypes.FETCH_ALBUMS_FAILED:
			return {
				...state,
				error: action.error
			};
		default:
			return state;
	}
};

export const getAlbums = state => state.albums;
export const getAlbumsPending = state => state.pending;
export const getAlbumsError = state => state.error;

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer, initialState } from '../reducers/rootReducer';

const middlewares = [logger, thunk];

export const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

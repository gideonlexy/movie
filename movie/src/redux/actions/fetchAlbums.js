import * as actionCreators from './actionCreators';

import axios from 'axios';

const fetchAlbums = () => async (dispatch) => {
  dispatch(actionCreators.fetchAlbumsPending());

  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10');

    const albums = res.data;
    dispatch(actionCreators.fetchAlbumsSuceeded(albums));
  } catch (error) {
    dispatch(actionCreators.fetchAlbumsFailed(error));
  }
};
export default fetchAlbums;

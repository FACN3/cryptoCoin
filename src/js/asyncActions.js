import axios from 'axios';

export default (url, coin, duration) => dispatch => {
  dispatch({
    type: 'ADD_API_DATA',
    payload: axios.get(url),
    meta: { coin, duration }
  });
};

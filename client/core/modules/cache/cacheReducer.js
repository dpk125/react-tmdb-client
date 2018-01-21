import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({});

const movies = (state = initialState, action) => {
  switch (action.type) {
    case constants.movies.REFRESH_MOVIE_LIST:
      return state.setIn([action.payload.category], action.payload.movies);
    default:
      return state;
  }
};

export default movies;

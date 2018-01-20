import { Map, List } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({
  upcoming: new List([]),
  topRated: new List([]),
  mostPopular: new List([]),
});

const movies = (state = initialState, action) => {
  switch (action.type) {
    case constants.movies.REFRESH_MOVIE_LIST:
      return state.setIn([action.payload.category], action.payload.movies);
    default:
      return state;
  }
};

export default movies;

import { List, Map } from 'immutable';
import { constants } from '../../constants';

const initialState = new Map({
  movies: new List([]),
  query: '',
});

const search = (state = initialState, action) => {
  switch (action.type) {
    case constants.search.SET_SEARCH_QUERY:
      return state.set('query', action.payload.query);
    case constants.search.REPLACE_SEARCH_MOVIE_LIST:
      return state.set('movies', new List(action.payload.movies));
    default:
      return state;
  }
};

export default search;

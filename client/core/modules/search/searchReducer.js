import { List, Map } from 'immutable';
import { REPLACE_SEARCH_MOVIE_LIST, SET_SEARCH_QUERY } from '../../constants/search';

const initialState = new Map({
  movies: new List([]),
  query: '',
});

const search = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return state.set('query', action.payload.query);
    case REPLACE_SEARCH_MOVIE_LIST:
      return state.set('movies', new List(action.payload.movies));
    default:
      return state;
  }
};

export default search;

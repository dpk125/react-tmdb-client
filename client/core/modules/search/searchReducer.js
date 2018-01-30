import { List, Map } from 'immutable';
import {
  REPLACE_SEARCH_MOVIE_LIST, SET_SEARCH_QUERY, SET_SEARCH_RESULTS_LOADED,
  SET_SEARCH_RESULTS_LOADING,
} from '../../constants/search';

const initialState = new Map({
  movies: new List([]),
  query: '',
  isLoading: '',
});

const search = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return state.set('query', action.payload.query);
    case REPLACE_SEARCH_MOVIE_LIST:
      return state.set('movies', new List(action.payload.movies));
    case SET_SEARCH_RESULTS_LOADING:
      return state.set('isLoading', true);
    case SET_SEARCH_RESULTS_LOADED:
      return state.set('isLoading', false);
    default:
      return state;
  }
};

export default search;

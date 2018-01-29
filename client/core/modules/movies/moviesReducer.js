import { fromJS, List } from 'immutable';
import {
  APPEND_TO_GENRE_MOVIE_LIST,
  APPEND_TO_GROUP_MOVIE_LIST,
  CHANGE_BACKGROUND,
  SAVE_MOVIE,
} from '../../constants/movies';
import { REPLACE_SEARCH_MOVIE_LIST } from '../../constants/search';

const initialState = fromJS({
  background: 'https://image.tmdb.org/t/p/original/AdYJMNhcXVeqjRenSHP88oaLCaC.jpg',
  topRated: [],
  upcoming: [],
  mostPopular: [],
  visited: [],
  genres: {},
  search: {
    movies: [],
    query: '',
  },
});

const movies = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_TO_GROUP_MOVIE_LIST:
      return state
        .updateIn(
          [action.payload.category],
          movies => (movies || new List([])).concat(action.payload.movies),
        );
    case APPEND_TO_GENRE_MOVIE_LIST:
      return state
        .updateIn(
          ['genres', action.payload.genre],
          movies => (movies || new List([])).concat(action.payload.movies),
        );
    case REPLACE_SEARCH_MOVIE_LIST:
      return state
        .setIn(['search', 'query'], action.payload.query)
        .setIn(['search', 'movies'], new List(action.payload.movies));
    case SAVE_MOVIE:
      const { movie } = action.payload;
      return state.setIn(['visited', movie.id.toString()], movie);
    case CHANGE_BACKGROUND:
      return state.set('background', action.payload.url);
    default:
      return state;
  }
};

export default movies;

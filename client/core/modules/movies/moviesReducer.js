import { fromJS, List } from 'immutable';
import { constants } from '../../constants';

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
    case constants.movies.APPEND_TO_GROUP_MOVIE_LIST:
      return state
        .updateIn(
          [action.payload.category],
          movies => (movies || new List([])).concat(action.payload.movies)
        );
    case constants.movies.APPEND_TO_GENRE_MOVIE_LIST:
      return state
        .updateIn(
          ['genres', action.payload.genre],
          movies => (movies || new List([])).concat(action.payload.movies)
        );
    case constants.movies.REPLACE_SEARCH_MOVIE_LIST:
      return state
        .setIn(['search', 'query'], action.payload.query)
        .setIn(['search', 'movies'], new List(action.payload.movies));
    case constants.movies.SAVE_MOVIE:
      const { movie } = action.payload;
      return state.setIn(['visited', movie.id.toString()], movie);
    case constants.movies.CHANGE_BACKGROUND:
      return state.set('background', action.payload.url);
    default:
      return state;
  }
};

export default movies;

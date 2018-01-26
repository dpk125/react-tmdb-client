import { List, Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({
  background: 'https://image.tmdb.org/t/p/original/AdYJMNhcXVeqjRenSHP88oaLCaC.jpg',
  topRated: new List([]),
  upcoming: new List([]),
  mostPopular: new List([]),
  visited: new List([]),
  genres: new Map({}),
});

const movies = (state = initialState, action) => {
  switch (action.type) {
    case constants.movies.APPEND_TO_GROUP_MOVIE_LIST:
      return state
        .updateIn(
          [action.payload.category],
          movies => (movies || []).concat(action.payload.movies)
        );
    case constants.movies.APPEND_TO_GENRE_MOVIE_LIST:
      return state
        .updateIn(
          ['genres', action.payload.genre],
          movies => (movies || new List([])).concat(action.payload.movies)
        );
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

import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({
  background: 'https://image.tmdb.org/t/p/original/AdYJMNhcXVeqjRenSHP88oaLCaC.jpg',
  movies: new Map({}),
});

const movies = (state = initialState, action) => {
  switch (action.type) {
    case constants.movies.REFRESH_MOVIE_LIST:
      return state.setIn([action.payload.category], action.payload.movies);
    case constants.movies.SAVE_MOVIE:
      const { movie } = action.payload;
      return state.setIn(['movies', movie.id + ''], movie);
    case constants.movies.CHANGE_BACKGROUND:
      return state.set('background', action.payload.url);
    default:
      return state;
  }
};

export default movies;

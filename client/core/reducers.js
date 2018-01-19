import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import movies from "./modules/movies/moviesReducer";
import genres from "./modules/genres/genresReducer";

const rootReducer = combineReducers({
  routing,
  movies,
  genres
});

export default rootReducer;

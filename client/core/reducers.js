import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import movies from "./modules/movies/moviesReducer";

const rootReducer = combineReducers({
  routing,
  movies
});

export default rootReducer;

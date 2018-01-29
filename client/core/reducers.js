import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import genres from './modules/genres/genresReducer';
import movies from './modules/movies/moviesReducer';
import search from './modules/search/searchReducer';
import wishlist from './modules/wishlist/wishlistReducer';

const rootReducer = combineReducers({
  routing,
  movies,
  genres,
  search,
  wishlist,
});

export default rootReducer;

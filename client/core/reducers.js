import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import cache from "./modules/cache/cacheReducer";
import genres from "./modules/genres/genresReducer";

const rootReducer = combineReducers({
  routing,
  cache,
  genres
});

export default rootReducer;

import { constants } from '../../constants';

export const requestMoviesBySearch = (query) => {
  return {
    type: constants.search.REQUEST_MOVIE_SEARCH,
    payload: {
      query
    }
  }
};

export const replaceSearchMovieList = (movies) => {
  return {
    type: constants.search.REPLACE_SEARCH_MOVIE_LIST,
    payload: {
      movies
    }
  }
};

export const updateSearchQuery = (query) => {
  return {
    type: constants.search.SET_SEARCH_QUERY,
    payload: {
      query
    }
  }
};

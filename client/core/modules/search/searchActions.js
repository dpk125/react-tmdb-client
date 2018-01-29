import { REPLACE_SEARCH_MOVIE_LIST, REQUEST_MOVIE_SEARCH, SET_SEARCH_QUERY } from '../../constants/search';

export const requestMoviesBySearch = (query) => {
  return {
    type: REQUEST_MOVIE_SEARCH,
    payload: {
      query,
    },
  };
};

export const replaceSearchMovieList = (movies) => {
  return {
    type: REPLACE_SEARCH_MOVIE_LIST,
    payload: {
      movies,
    },
  };
};

export const updateSearchQuery = (query) => {
  return {
    type: SET_SEARCH_QUERY,
    payload: {
      query,
    },
  };
};

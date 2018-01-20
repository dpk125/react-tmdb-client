import { constants } from '../../constants';

export const appendToMovieList = (category, movies) => {
  return {
    type: constants.movies.REFRESH_MOVIE_LIST,
    payload: {
      category,
      movies
    }
  }
};

export const requestMovies = (category) => {
  return {
    type: constants.movies.REQUEST_MOVIE_LIST,
    payload: {
      category
    }
  }
};

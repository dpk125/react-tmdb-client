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

export const saveMovie = (movie) => {
  return {
    type: constants.movies.SAVE_MOVIE,
    payload: {
      movie
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

export const requestMovie = (id) => {
  return {
    type: constants.movies.REQUEST_MOVIE,
    payload: {
      id
    }
  }
};

export const changeBackground = (url) => {
  return {
    type: constants.movies.CHANGE_BACKGROUND,
    payload: {
      url
    }
  }
};

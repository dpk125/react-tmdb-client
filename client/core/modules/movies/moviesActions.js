import { constants } from '../../constants';

export const appendToCategoryMovieList = (category, movies) => {
  return {
    type: constants.movies.APPEND_TO_GROUP_MOVIE_LIST,
    payload: {
      category,
      movies
    }
  }
};

export const appendToGenreMovieList = (genre, movies) => {
  return {
    type: constants.movies.APPEND_TO_GENRE_MOVIE_LIST,
    payload: {
      genre,
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

export const requestMoviesByGroup = (group) => {
  return {
    type: constants.movies.REQUEST_MOVIE_GROUP,
    payload: {
      group
    }
  }
};

export const requestMoviesByGenre = (genre) => {
  return {
    type: constants.movies.REQUEST_MOVIE_GENRE,
    payload: {
      genre
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

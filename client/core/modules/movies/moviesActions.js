import {
  APPEND_TO_GENRE_MOVIE_LIST,
  APPEND_TO_GROUP_MOVIE_LIST,
  CHANGE_BACKGROUND,
  REQUEST_MOVIE,
  REQUEST_MOVIE_GENRE,
  REQUEST_MOVIE_GROUP,
  SAVE_MOVIE,
} from '../../constants/movies';

export const appendToCategoryMovieList = (category, movies) => {
  return {
    type: APPEND_TO_GROUP_MOVIE_LIST,
    payload: {
      category,
      movies,
    },
  };
};

export const appendToGenreMovieList = (genre, movies) => {
  return {
    type: APPEND_TO_GENRE_MOVIE_LIST,
    payload: {
      genre,
      movies,
    },
  };
};

export const saveMovie = (movie) => {
  return {
    type: SAVE_MOVIE,
    payload: {
      movie,
    },
  };
};

export const requestMoviesByGroup = (group) => {
  return {
    type: REQUEST_MOVIE_GROUP,
    payload: {
      group,
    },
  };
};

export const requestMoviesByGenre = (genre) => {
  return {
    type: REQUEST_MOVIE_GENRE,
    payload: {
      genre,
    },
  };
};

export const requestMovie = (id) => {
  return {
    type: REQUEST_MOVIE,
    payload: {
      id,
    },
  };
};

export const changeBackground = (url) => {
  return {
    type: CHANGE_BACKGROUND,
    payload: {
      url,
    },
  };
};

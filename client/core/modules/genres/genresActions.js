import { REFRESH_GENRES_LIST, REQUEST_GENRES_LIST } from '../../constants/genres';

export const appendToGenresList = (genres) => {
  return {
    type: REFRESH_GENRES_LIST,
    payload: {
      genres,
    },
  };
};

export const requestGenres = (category) => {
  return {
    type: REQUEST_GENRES_LIST,
  };
};

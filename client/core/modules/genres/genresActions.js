import { constants } from '../../constants';

export const appendToGenresList = (genres) => {
  return {
    type: constants.genres.REFRESH_GENRES_LIST,
    payload: {
      genres
    }
  }
};

export const requestGenres = (category) => {
  return {
    type: constants.genres.REQUEST_GENRES_LIST
  }
};

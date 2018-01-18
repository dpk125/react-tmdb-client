import { constants } from "../constants";

export const baseURL = 'https://api.themoviedb.org/3';

export const endpoint = {
  movies: (category) => {
    switch (category) {
      case constants.category.MOST_POPULAR:
        return '/movie/popular';
      case constants.category.TOP_RATED:
        return '/movie/top_rated';
      case constants.category.UPCOMING:
        return '/movie/upcoming';
      default:
        return '/movie/latest';
    }
  },
  movie: (id) => `/movie/${id}`,
  genres: () => '/genre/movie/list',
  genreMovies: (genre) => `/genre/${genre}/movies`,
  search: (query) => `/search/movie?query=${query}`,
};
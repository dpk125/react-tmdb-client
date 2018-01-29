import { CATEGORY_MOST_POPULAR, CATEGORY_TOP_RATED, CATEGORY_UPCOMING } from '../constants/category';

export const baseURL = 'https://api.themoviedb.org/3';

export const endpoint = {
  movies: (category) => {
    switch (category) {
      case CATEGORY_MOST_POPULAR:
        return '/movie/popular';
      case CATEGORY_TOP_RATED:
        return '/movie/top_rated';
      case CATEGORY_UPCOMING:
        return '/movie/upcoming';
      default:
        return `/movie/popular`;
    }
  },
  movie: (id) => `/movie/${id}`,
  genres: () => '/genre/movie/list',
  genre: (genre) => `/genre/${genre}/movies`,
  search: () => `/search/movie`,
};

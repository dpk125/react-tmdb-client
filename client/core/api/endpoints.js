export const baseURL = 'https://api.themoviedb.org/3';

export const endpoint = {
  popularMovies: () => '/movie/popular',
  topRatedMovies: () => '/movie/top_rated',
  upcomingMovies: () => '/movie/upcoming',
  movie: (id) => `/movie/${id}`,
  genres: () => '/genre/movie/list',
  genreMovies: (genre) => `/genre/${genre}/movies`,
  search: (query) => `/search/movie?query=${query}`,
};
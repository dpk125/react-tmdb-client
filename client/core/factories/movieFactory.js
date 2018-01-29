export const createMovieFromResponse = (response) => {
  const {
    id,
    title,
    overview: description,
    poster_path: poster,
    backdrop_path: backdrop,
    release_date: releaseDate,
  } = response;

  const rating = response.vote_average || null;

  return { id, title, description, rating, poster, backdrop, releaseDate };
};

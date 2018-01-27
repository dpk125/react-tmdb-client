export const getNextPage = (movies) => {
  return Math.floor(movies.size / 20) + 1;
};

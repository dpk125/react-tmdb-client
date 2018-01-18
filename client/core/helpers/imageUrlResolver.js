const cdnURL = 'https://image.tmdb.org/t/p/';

export const getPosterUrl = (name, size = 'w342') => `${cdnURL}${size}${name}`;
export const getBackdropUrl = (name, size = 'w1280') => `${cdnURL}${size}${name}`;

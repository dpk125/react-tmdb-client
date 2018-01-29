import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../../constants/wishlist';

export const addToWishlist = (movie) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: {
      movie,
    },
  };
};

export const removeFromWishlist = (movie) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: {
      movie,
    },
  };
};

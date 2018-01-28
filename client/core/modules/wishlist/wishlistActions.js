import { constants } from '../../constants';

export const addToWishlist = (movie) => {
  return {
    type: constants.wishlist.ADD_TO_WISHLIST,
    payload: {
      movie
    }
  }
};

export const removeFromWishlist = (movie) => {
  return {
    type: constants.wishlist.REMOVE_FROM_WISHLIST,
    payload: {
      movie
    }
  }
};

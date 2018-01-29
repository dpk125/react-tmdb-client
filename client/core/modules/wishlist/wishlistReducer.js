import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../../constants/wishlist';

const initialState = {};

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const movie = action.payload.movie;
      return Object.assign({}, state, { [movie.id]: movie });
    case REMOVE_FROM_WISHLIST:
      let stateCopy = Object.assign({}, state);
      delete stateCopy[action.payload.movie.id];
      return stateCopy;
    default:
      return state;
  }
};

export default wishlist;

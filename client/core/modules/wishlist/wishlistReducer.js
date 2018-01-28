import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = {};

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case constants.wishlist.ADD_TO_WISHLIST:
      const movie = action.payload.movie;
      return Object.assign({}, state, {[movie.id]: movie});
    case constants.wishlist.REMOVE_FROM_WISHLIST:
      let stateCopy = Object.assign({}, state);
      delete stateCopy[action.payload.movie.id];
      return stateCopy;
    default:
      return state;
  }
};

export default wishlist;

import { List } from 'immutable';
import { REFRESH_GENRES_LIST } from '../../constants/genres';

const initialState = new List([]);

const genres = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_GENRES_LIST:
      return new List(action.payload.genres);
    default:
      return state;
  }
};

export default genres;

import { Map, List } from 'immutable';
import { constants } from '../../constants';

const initialState = new List([]);

const genres = (state = initialState, action) => {
  switch (action.type) {
    case constants.genres.REFRESH_GENRES_LIST:
      return new List(action.payload.genres);
    default:
      return state;
  }
};

export default genres;

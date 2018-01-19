import { takeLatest, call, all, put, select } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { endpoint } from '../../api/endpoints';
import { get } from '../../api/requests';
import { appendToGenresList } from './genresActions';

function* onGenresRequest() {
  const { response, error } = yield call(get,  endpoint.genres());

  if (response) {
    const { data } = response;

    yield put(appendToGenresList(data.genres));
  }
}

export default function* moviesSaga() {
  yield all([
    takeLatest(constants.genres.REQUEST_GENRES_LIST, onGenresRequest),
  ]);
}

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { endpoint } from '../../api/endpoints';
import { get } from '../../api/requests';
import { REQUEST_GENRES_LIST } from '../../constants/genres';
import { appendToGenresList } from './genresActions';

function* onGenresRequest() {
  const { response, error } = yield call(get, endpoint.genres());

  if (response) {
    const { data } = response;

    yield put(appendToGenresList(data.genres));
  }
}

export default function* moviesSaga() {
  yield all([
    takeLatest(REQUEST_GENRES_LIST, onGenresRequest),
  ]);
}

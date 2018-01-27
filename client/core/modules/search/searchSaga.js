import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { constants } from '../../../core/constants';
import { endpoint } from '../../api/endpoints';
import { get } from '../../api/requests';
import { replaceSearchMovieList, updateSearchQuery } from './searchActions';
import { createMovieFromResponse } from '../../factories/movieFactory';

function* onMoviesSearchRequest({ payload: { query }}) {
  yield put(replaceSearchMovieList([]));
  yield put(updateSearchQuery(query));

  yield call(delay, 500);

  const { response, error } = yield call(get, endpoint.search(), { query });

  if (response) {
    const movies = response.data.results.map(result => createMovieFromResponse(result));
    yield put(replaceSearchMovieList(movies));
  }
}

export default function* searchSaga() {
  yield all([
    takeLatest(constants.search.REQUEST_MOVIE_SEARCH, onMoviesSearchRequest),
  ]);
}

import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { endpoint } from '../../api/endpoints';
import { get } from '../../api/requests';
import { REQUEST_MOVIE_SEARCH } from '../../constants/search';
import { createMovieFromResponse } from '../../factories/movieFactory';
import { replaceSearchMovieList, updateSearchQuery } from './searchActions';

function* onMoviesSearchRequest({ payload: { query } }) {
  const searchQuery = query.trim();
  if (searchQuery === '') {
    return;
  }

  yield put(replaceSearchMovieList([]));
  yield put(updateSearchQuery(searchQuery));

  yield call(delay, 500);

  const { response } = yield call(get, endpoint.search(), { query: searchQuery });

  if (response) {
    const movies = response.data.results.map(result => createMovieFromResponse(result));
    yield put(replaceSearchMovieList(movies));
  }
}

export default function* searchSaga() {
  yield all([
    takeLatest(REQUEST_MOVIE_SEARCH, onMoviesSearchRequest),
  ]);
}

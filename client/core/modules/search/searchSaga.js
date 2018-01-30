import { delay } from 'redux-saga';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { endpoint } from '../../api/endpoints';
import { get } from '../../api/requests';
import { REQUEST_MOVIE_SEARCH } from '../../constants/search';
import { createMovieFromResponse } from '../../factories/movieFactory';
import {
  replaceSearchMovieList, setSearchResultsLoaded, setSearchResultsLoading,
  updateSearchQuery,
} from './searchActions';

function* onMoviesSearchRequest({ payload: { query } }) {
  const { search } = yield select();
  const searchQuery = query.trim();

  if (searchQuery !== search.get('query')) {
    yield put(updateSearchQuery(searchQuery));
  }

  if (searchQuery === '') {
    yield put(setSearchResultsLoaded());
    return;
  }

  if (!search.get('movies').isEmpty()) {
    yield put(replaceSearchMovieList([]));
  }

  if (!search.get('isLoading')) {
    yield put(setSearchResultsLoading());
  }

  yield call(delay, 500);

  const { response } = yield call(get, endpoint.search(), { query: searchQuery });

  if (response) {
    const movies = response.data.results.map(result => createMovieFromResponse(result));
    yield put(replaceSearchMovieList(movies));
  }

  yield put(setSearchResultsLoaded());
}

export default function* searchSaga() {
  yield all([
    takeLatest(REQUEST_MOVIE_SEARCH, onMoviesSearchRequest),
  ]);
}

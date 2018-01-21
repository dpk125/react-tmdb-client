import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { endpoint } from '../../api/endpoints';
import { get } from '../../api/requests';
import { appendToMovieList } from './cacheActions';

function* onMoviesRequest({ payload: { category } }) {
  const { cache } = yield select();
  const path = endpoint.movies(category);

  if (cache.has(path)) {
    return;
  }

  const { response, error } = yield call(get, path);

  if (response) {
    const { data } = response;

    const movies = data.results.map(movie => {
      const { id, title, vote_average: rating, poster_path: poster } = movie;

      return { id, title, rating, poster };
    });

    yield put(appendToMovieList(path, movies));
  }
}

export default function* moviesSaga() {
  yield all([
    takeLatest(constants.movies.REQUEST_MOVIE_LIST, onMoviesRequest),
  ]);
}

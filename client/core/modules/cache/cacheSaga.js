import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { endpoint } from '../../api/endpoints';
import { get } from '../../api/requests';
import { appendToMovieList, changeBackground, saveMovie } from './cacheActions';
import { getBackdropUrl } from '../../helpers/imageUrlResolver';

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

function* onMovieRequest({ payload: { id }}) {
  const { cache } = yield select();
  const path = endpoint.movie(id);

  if (cache.has(path)) {
    return;
  }

  const { response, error } = yield call(get, path);

  if (response) {
    const { data } = response;
    const {
      id,
      title,
      overview: description,
      poster_path: poster,
      backdrop_path: backdrop,
      release_date: releaseDate,
    } = data;

    const rating = data.vote_average || null;
    const movie = { id, title, description, rating, poster, backdrop, releaseDate };

    yield put(saveMovie(movie));

    if (backdrop) {
      yield put(changeBackground(getBackdropUrl(backdrop, 'w1280')));
    }
  }
}

export default function* cacheSaga() {
  yield all([
    takeLatest(constants.movies.REQUEST_MOVIE_LIST, onMoviesRequest),
    takeLatest(constants.movies.REQUEST_MOVIE, onMovieRequest),
  ]);
}

import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { endpoint } from '../../api/endpoints';
import { get } from '../../api/requests';
import { appendToMovieList, changeBackground, saveMovie } from './cacheActions';
import { getBackdropUrl } from '../../helpers/imageUrlResolver';

function* onMoviesRequest({ payload: { category } }) {
  const { cache } = yield select();
  const path = endpoint.movies(category);
  const page = cache.getIn([path, 'page']);

  if (cache.has(path)) {
    // return; TODO: don't load more when revisiting the same page.
    // TODO: also stop requesting new pages when all results have been shown.
  }

  const { response, error } = yield call(get, path, { page });

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
    takeEvery(constants.movies.REQUEST_MOVIE_LIST, onMoviesRequest),
    takeLatest(constants.movies.REQUEST_MOVIE, onMovieRequest),
  ]);
}

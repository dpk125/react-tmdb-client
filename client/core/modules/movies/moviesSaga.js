import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { endpoint } from '../../api/endpoints';
import { get } from '../../api/requests';
import { appendToCategoryMovieList, appendToGenreMovieList, changeBackground, saveMovie } from './moviesActions';
import { getBackdropUrl } from '../../helpers/imageUrlResolver';
import { createMovieFromResponse } from '../../factories/movieFactory';
import { List } from 'immutable';
import { getNextPage } from '../../helpers/pagination';

function* onMoviesGenreRequest({ payload: { genre } }) {
  const { movies, genres } = yield select();
  const genreMovies = movies.getIn(['genres', genre], new List([]));

  const page = getNextPage(genreMovies);
  const genreId = genres.find(item => item.name === genre).id;
  const { response, error } = yield call(get, endpoint.genre(genreId), { page });

  if (response) {
    const movies = response.data.results.map(result => createMovieFromResponse(result));
    yield put(appendToGenreMovieList(genre, movies));
  }
}

function* onMoviesGroupRequest({ payload: { group } }) {
  const { movies } = yield select();
  const categoryMovies = movies.get(group);

  const page = getNextPage(categoryMovies);
  const { response, error } = yield call(get, endpoint.movies(group), { page });

  if (response) {
    const movies = response.data.results.map(result => createMovieFromResponse(result));
    yield put(appendToCategoryMovieList(group, movies));
  }
}

function* onMovieRequest({ payload: { id }}) {
  const { response, error } = yield call(get, endpoint.movie(id));

  if (response) {
    const movie = createMovieFromResponse(response.data);
    yield put(saveMovie(movie));

    if (movie.backdrop) {
      yield put(changeBackground(getBackdropUrl(movie.backdrop, 'w1280')));
    }
  }
}

export default function* moviesSaga() {
  yield all([
    takeLatest(constants.movies.REQUEST_MOVIE_GROUP, onMoviesGroupRequest),
    takeLatest(constants.movies.REQUEST_MOVIE_GENRE, onMoviesGenreRequest),
    takeLatest(constants.movies.REQUEST_MOVIE, onMovieRequest),
  ]);
}

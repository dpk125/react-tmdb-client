import { List } from 'immutable';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { endpoint } from '../../api/endpoints';
import { get } from '../../api/requests';
import { REQUEST_MOVIE, REQUEST_MOVIE_GENRE, REQUEST_MOVIE_GROUP } from '../../constants/movies';
import { createMovieFromResponse } from '../../factories/movieFactory';
import { getBackdropUrl } from '../../helpers/imageUrlResolver';
import { getNextPage } from '../../helpers/pagination';
import { appendToCategoryMovieList, appendToGenreMovieList, changeBackground, saveMovie } from './moviesActions';

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

function* onMovieRequest({ payload: { id } }) {
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
    takeLatest(REQUEST_MOVIE_GROUP, onMoviesGroupRequest),
    takeLatest(REQUEST_MOVIE_GENRE, onMoviesGenreRequest),
    takeLatest(REQUEST_MOVIE, onMovieRequest),
  ]);
}

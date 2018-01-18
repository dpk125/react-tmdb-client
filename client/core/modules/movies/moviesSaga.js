import { takeLatest, call, all, put, select } from 'redux-saga/effects';
import { constants } from '../../../core/constants';
import { endpoint } from '../../api/endpoints';
import { get } from '../../api/requests';
import { appendToMovieList } from "./moviesActions";

function* onMoviesRequest({ payload: { category }}) {
  const { response, error } = yield call(get,  endpoint.movies(category));

  if (response) {
    const { data } = response;

    const movies = data.results.map(movie => {
      const { id, title, vote_average: rating, poster_path: poster } = movie;

      return { id, title, rating, poster };
    });

    yield put(appendToMovieList(category, movies));
  }
}

export default function* moviesSaga() {
  yield all([
    takeLatest(constants.movies.REQUEST_MOVIE_LIST, onMoviesRequest),
  ]);
}

import { all, fork } from 'redux-saga/effects';
import genresSaga from './modules/genres/genresSaga';
import moviesSaga from './modules/movies/moviesSaga';
import searchSaga from './modules/search/searchSaga';

export default function* rootSaga() {
  yield all([
    fork(moviesSaga),
    fork(genresSaga),
    fork(searchSaga),
  ]);
}

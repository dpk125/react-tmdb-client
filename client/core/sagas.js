import { all, fork } from 'redux-saga/effects';
import moviesSaga from './modules/movies/moviesSaga';
import genresSaga from './modules/genres/genresSaga';

export default function* rootSaga() {
  yield all([
    fork(moviesSaga),
    fork(genresSaga)
  ]);
}

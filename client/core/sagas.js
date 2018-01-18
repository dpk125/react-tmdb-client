import { all, fork } from 'redux-saga/effects';
import moviesSaga from "./modules/movies/moviesSaga";

export default function* rootSaga() {
  yield all([
    fork(moviesSaga)
  ]);
}

import { all, fork } from 'redux-saga/effects';
import cacheSaga from "./modules/cache/cacheSaga";
import genresSaga from "./modules/genres/genresSaga";

export default function* rootSaga() {
  yield all([
    fork(cacheSaga),
    fork(genresSaga)
  ]);
}

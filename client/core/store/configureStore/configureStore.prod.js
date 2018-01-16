import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../../reducers';
import rootSaga from '../../sagas';

export default function configureStore(history, initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
    initialState,
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

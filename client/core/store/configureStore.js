import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import persistState, { mergePersistedState } from 'redux-localstorage';
import filter from 'redux-localstorage-filter';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(history, initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const reducer = compose(
    mergePersistedState(),
  )(rootReducer);

  const storage = compose(
    filter('wishlist'),
  )(adapter(window.localStorage));

  // TODO: do the same with immutable
  // const createPersistentStore = compose(
  //   persistState(storage, 'my-storage-key')
  // )(createStore);

  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(...middlewares),
      persistState(storage, 'tmdb'),
    ),
    initialState,
    devToolsEnhancer(),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

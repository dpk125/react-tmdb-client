import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import persistState, { mergePersistedState } from 'redux-localstorage';
import filter from 'redux-localstorage-filter';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { fromJS } from 'immutable';

export default function configureStore(history, initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const reducer = compose(
    mergePersistedState()
  )(rootReducer);

  const storage = compose(
    filter('wishlist')
  )(adapter(window.localStorage));

  // TODO: do the same with immutable
  // const createPersistentStore = compose(
  //   persistState(storage, 'my-storage-key')
  // )(createStore);

  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(...middlewares),
      persistState(storage, 'tmdb')
    ),
    initialState,
    devToolsEnhancer()
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import history from './core/history';
import Root from './containers/Root';
import configureStore from './core/store/configureStore';
import '../resources/assets/scss/main.scss';

const store = configureStore(history);

render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);

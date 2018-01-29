import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import '../resources/assets/scss/main.scss';
import Root from './containers/Root';
import history from './core/history';
import configureStore from './core/store/configureStore';

const store = configureStore(history);

render(
  <Root store={store} history={history} />,
  document.getElementById('app'),
);

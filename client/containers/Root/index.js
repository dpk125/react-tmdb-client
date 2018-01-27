import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../App';
import { Home } from '../../pages/Home';
import Genres from '../../pages/Genres';
import Movie from '../../pages/Movie';
import { constants } from '../../core/constants';
import GroupMovieList from '../../pages/GroupMovieList';
import Search from '../../pages/Search';

const Root = ({ store, history }) => (
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/genres" component={Genres} />
            <Route
              path="/most-popular"
              render={() => (
                <GroupMovieList
                  group={constants.category.MOST_POPULAR}
                  title="Most popular" />
              )}
            />
            <Route
              path="/top-rated"
              render={() => (
                <GroupMovieList
                  group={constants.category.TOP_RATED}
                  title="Top rated" />
              )}
            />
            <Route
              path="/upcoming"
              render={() => (
                <GroupMovieList
                  group={constants.category.UPCOMING}
                  title="Upcoming" />
              )}
            />
            <Route
              path="/movie/:id"
              component={Movie}
            />
            <Route path="/search" component={Search} />
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
);

export default Root;

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { CATEGORY_MOST_POPULAR, CATEGORY_TOP_RATED, CATEGORY_UPCOMING } from '../../core/constants/category';
import Genres from '../../pages/Genres';
import GroupMovieList from '../../pages/GroupMovieList';
import { Home } from '../../pages/Home';
import Movie from '../../pages/Movie';
import NotFound from '../../pages/NotFound';
import Search from '../../pages/Search';
import Wishlist from '../../pages/Wishlist';
import App from '../App';

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
                  group={CATEGORY_MOST_POPULAR}
                  title="Most popular" />
              )}
            />
            <Route
              path="/top-rated"
              render={() => (
                <GroupMovieList
                  group={CATEGORY_TOP_RATED}
                  title="Top rated" />
              )}
            />
            <Route
              path="/upcoming"
              render={() => (
                <GroupMovieList
                  group={CATEGORY_UPCOMING}
                  title="Upcoming" />
              )}
            />
            <Route path="/wishlist" component={Wishlist} />
            <Route
              path="/movie/:id(\d+)"
              component={Movie}
            />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
);

export default Root;

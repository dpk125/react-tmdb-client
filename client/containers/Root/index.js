import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../App';
import { Home } from '../../pages/Home';
import Genres from '../../pages/Genres';
import { Movie } from '../../pages/Movie';
import { constants } from '../../core/constants';
import { CategoryMovieList } from '../../pages/CategoryMovieList';

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
                <CategoryMovieList category={constants.category.MOST_POPULAR}>
                  Most popular
                </CategoryMovieList>
              )}
            />
            <Route
              path="/top-rated"
              render={() => (
                <CategoryMovieList category={constants.category.TOP_RATED}>
                  Top rated
                </CategoryMovieList>
              )}
            />
            <Route
              path="/upcoming"
              render={() => (
                <CategoryMovieList category={constants.category.UPCOMING}>
                  Upcoming
                </CategoryMovieList>
              )}
            />
            <Route path="/movie" component={Movie} />
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
);

export default Root;

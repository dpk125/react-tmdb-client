import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../App';
import { Home } from '../../pages/Home';
import Genres from '../../pages/Genres';
import MovieList from "../../pages/MovieList";
import { Movie } from "../../pages/Movie";
import { constants } from "../../core/constants";

const Root = ({ store, history }) => (
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/genres" component={Genres} />
            <Route path="/most-popular" render={() => <MovieList category={constants.category.MOST_POPULAR}/>} />
            <Route path="/top-rated" render={() => <MovieList category={constants.category.TOP_RATED}/>} />
            <Route path="/upcoming" render={() => <MovieList category={constants.category.UPCOMING}/>} />
            <Route path="/movie" component={Movie} />
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
);

export default Root;

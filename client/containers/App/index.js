import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Home } from './home';
import { GenreNotSelected } from './genre-not-selected';
import { Genre } from './genre';
import { Movie } from './movie';
import { List } from './list';

class App extends React.Component {
  render() {
    return (
      <div className="app-image"
           style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/AdYJMNhcXVeqjRenSHP88oaLCaC.jpg')`}}>
        <div className="app-colors">
          <div className="app-container">
            <div className="header">
              <Link to="/" className="header__logo">MOVIES</Link>

              <div className="header__action">Genres</div>
              <div className="header__action is-active">Most popular</div>
              <div className="header__action">Top rated</div>
              <div className="header__action">Upcomming</div>

              <div className="header-search">
                <input type="text" className="header-search__input" />
                <div className="header-search__button">
                  <i className="fa fa-search" />
                </div>
              </div>
            </div>

            <div className="container-fluid">
              {/* Pages */}

              <Home />
              {/*<GenreNotSelected />*/}
              {/*<Genre />*/}
              {/*<List />*/}
              {/*<Movie />*/}
            </div>

            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));

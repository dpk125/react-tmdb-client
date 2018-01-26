import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="app-image"
           style={{ backgroundImage: `url('${this.props.background}')` }}>
        <div className="app-colors">
          <div className="app-container">
            <div className="header">
              <NavLink to="/" className="header__logo">MOVIES</NavLink>

              <NavLink to="/genres" className="header__action" activeClassName="is-active">Genres</NavLink>
              <NavLink to="/most-popular" className="header__action" activeClassName="is-active">Most popular</NavLink>
              <NavLink to="/top-rated" className="header__action" activeClassName="is-active">Top rated</NavLink>
              <NavLink to="/upcoming" className="header__action" activeClassName="is-active">Upcoming</NavLink>

              {/*<Search />*/}
            </div>

            <div className="container-fluid">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  background: state.movies.get('background')
});

const mapDispatchToProps = () => ({});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));

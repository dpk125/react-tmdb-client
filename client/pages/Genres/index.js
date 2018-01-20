import React from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Switch } from 'react-router-dom';
import {requestGenres} from "../../core/modules/genres/genresActions";
import MovieList from '../../components/MovieList'
import {SelectGenre} from "../../components/SelectGenre";

class Genres extends React.Component {
  componentWillMount() {
    this.props.onGenresRequest();
  }

  render() {
    const isLoading = true;

    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="list">
            {this.props.genres.map(genre => {
              return <NavLink
                key={genre.id}
                className="list-item"
                activeClassName="is-active"
                to={{ pathname: `/genres/${genre.id}` }}>
                {genre.name}
              </NavLink>
            })}
          </div>
        </div>

        <div className="col-sm-9">
          <Switch>
            <Route path="/genres/:id" render={({ match }) => <MovieList category={match.params.id} /> } />
            <Route component={SelectGenre}/>
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  genres: state.genres,
});

const mapDispatchToProps = dispatch => ({
  onGenresRequest: () => dispatch(requestGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Genres);


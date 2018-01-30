import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Preloader } from '../../components/Preloader';
import { requestGenres } from '../../core/modules/genres/genresActions';
import GenreMovieList from '../GenreMovieList';

class Genres extends React.Component {
  componentWillMount() {
    this.props.onGenresRequest();
  }

  render() {
    const genres = this.props.genres;

    if (genres.isEmpty()) {
      return <Preloader />;
    }

    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="list">
            {this.props.genres.map(genre => {
              return <NavLink
                key={genre.id}
                className="list-item"
                activeClassName="is-active"
                to={{ pathname: `/genres/${genre.name}` }}>
                {genre.name}
              </NavLink>;
            })}
          </div>
        </div>

        <div className="col-sm-9">
          <Switch>
            <Route path="/genres/:name" render={({ match }) => {
              const genre = genres.find(genre => genre.name === match.params.name);

              if (!genre){
                return <div className="genre-title">Genre was not found</div>
              }

              return <GenreMovieList genre={genre.name} />;
            }} />
            <Route component={() => <div className="genre-title">Please select a genre</div>} />
          </Switch>
        </div>
      </div>
    );
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


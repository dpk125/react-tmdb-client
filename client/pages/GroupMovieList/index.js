import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestMoviesByGroup } from '../../core/modules/movies/moviesActions';
import { MoviePoster } from '../../components/MoviePoster/index';
import { Preloader } from '../../components/Preloader/index';

class GroupMovieList extends React.Component {
  componentWillMount() {
    if (this.props.movies.get(this.props.group).isEmpty()) {
      this.loadMovies();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.group !== this.props.group
      && nextProps.movies.get(nextProps.group).isEmpty()
    ) {
      this.props.onMovieListRequest(nextProps.group);
    }
  }

  loadMovies() {
    this.props.onMovieListRequest(this.props.group);
  }

  render() {
    const movies = this.props.movies.get(this.props.group);

    if (movies.isEmpty()) {
      return <Preloader />;
    }

    const items = movies.map((movie, index) => (
       <div key={index} className="col-sm-2">
          <Link to={`/movie/${movie.id}`}>
            <MoviePoster {...movie} />
          </Link>
        </div>
      )
    );

    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="title">{this.props.title}</div>
        </div>

        <div className="col-sm-9 col-offset-sm-3">
          <div className="movie-list">
            <div className="row">
              {items}
            </div>
            {!items.isEmpty() && (
              <a className="btn" onClick={() => this.loadMovies()}>
                Load more
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }
}

GroupMovieList.propTypes = {
  group: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  title: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  onMovieListRequest: (group) => dispatch(requestMoviesByGroup(group)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupMovieList);

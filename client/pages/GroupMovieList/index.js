import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestMoviesByGroup } from '../../core/modules/movies/moviesActions';
import { Preloader } from '../../components/Preloader/index';
import { MovieList } from '../../components/MovieList';

class GroupMovieList extends React.Component {
  constructor(props) {
    super(props);

    this.loadMovies = this.loadMovies.bind(this);
  }
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

    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="title">{this.props.title}</div>
        </div>

        <div className="col-sm-9 col-offset-sm-3">
          <MovieList movies={movies} loadMovies={this.loadMovies} />
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

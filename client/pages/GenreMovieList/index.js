import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestMoviesByGenre } from '../../core/modules/movies/moviesActions';
import { Preloader } from '../../components/Preloader/index';
import { MovieList } from '../../components/MovieList';

class GenreMovieList extends React.Component {
  constructor(props) {
    super(props);

    this.loadMovies = this.loadMovies.bind(this);
  }
  componentWillMount() {
    this.props.onMovieListRequest(this.props.genre);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.genre !== this.props.genre
      && !nextProps.movies.get(nextProps.genre)
    ) {
      this.props.onMovieListRequest(nextProps.genre);
    }
  }

  loadMovies() {
    this.props.onMovieListRequest(this.props.genre);
  }

  render() {
    const movies = this.props.movies.get(this.props.genre);

    if (!movies) {
      return <Preloader />;
    }

    return (
      <MovieList
        movies={movies}
        loadMovies={this.loadMovies}
      />
    )
  }
}

GenreMovieList.propTypes = {
  genre: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies.get('genres'),
  genres: state.genres,
});

const mapDispatchToProps = dispatch => ({
  onMovieListRequest: (genre) => dispatch(requestMoviesByGenre(genre)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenreMovieList);

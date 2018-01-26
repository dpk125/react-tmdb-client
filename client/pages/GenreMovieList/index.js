import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestMoviesByGenre } from '../../core/modules/movies/moviesActions';
import { MoviePoster } from '../../components/MoviePoster/index';
import { Preloader } from '../../components/Preloader/index';

class GenreMovieList extends React.Component {
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

  render() {
    const movies = this.props.movies.get(this.props.genre);

    if (!movies) {
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
      <div className="movie-list">
        <div className="row">
          {items}
        </div>
        {items && (
          <a className="btn" onClick={() => this.props.onMovieListRequest(this.props.genre)}>
            Load more
          </a>
        )}
      </div>
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

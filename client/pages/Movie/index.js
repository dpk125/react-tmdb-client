import React from 'react';
import { connect } from 'react-redux';
import { changeBackground, requestMovie } from '../../core/modules/movies/moviesActions';
import { Rating } from '../../components/Rating';
import { Preloader } from '../../components/Preloader';
import { MoviePoster } from '../../components/MoviePoster';
import { getBackdropUrl } from '../../core/helpers/imageUrlResolver';
import WishlistButton from '../../components/WishlistButton';

class Movie extends React.Component {
  componentWillMount() {
    const { location, match } = this.props;

    if (location.state && location.state.movie) {
      const backdrop = getBackdropUrl(location.state.movie.backdrop, 'w1280');
      return this.props.changeBackground(backdrop);
    }

    this.props.requestMovie(match.params.id);
  }

  getMovie() {
    const { location, match, movies } = this.props;

    if (location.state) {
      return location.state.movie;
    }

    return movies.get(match.params.id);
  }

  render() {
    const movie = this.getMovie();

    if (!movie) {
      return <Preloader />;
    }

    return (
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <div className="row">
              <div className="col-sm-4 text-center">
                {movie.poster && (
                  <MoviePoster {...movie} />
                )}

                <WishlistButton movie={movie}/>
              </div>

            <div className="col-sm-8">
              <div className="release-date">
                Release date: <strong>{movie.releaseDate}</strong>
              </div>

              <div className="title">
                {movie.title}
              </div>

              <div className="description">
                {movie.description}
              </div>

              {movie.rating && (
                <Rating score={movie.rating} />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.get('visited'),
});

const mapDispatchToProps = dispatch => ({
  requestMovie: (id) => dispatch(requestMovie(id)),
  changeBackground: (url) => dispatch(changeBackground(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);

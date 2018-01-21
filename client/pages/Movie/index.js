import React from 'react';
import { connect } from 'react-redux';
import { requestMovie } from '../../core/modules/cache/cacheActions';
import { Rating } from '../../components/Rating';
import { Preloader } from '../../components/Preloader';
import { getPosterUrl } from '../../core/helpers/imageUrlResolver';

class Movie extends React.Component {
  componentWillMount() {
    const { match } = this.props;
    this.props.onMovieRequest(match.params.id);
  }

  render() {
    const id = this.props.match.params.id;
    const movie = this.props.movies.get(id);

    if (!movie) {
      return <Preloader />;
    }

    return (
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <div className="row">
            <div className="col-sm-4">
              <div className="movie-list-item"
                   style={{ backgroundImage: `url('${getPosterUrl(movie.poster)}')` }}>
                <span className="movie-list-item__rating">{movie.rating}</span>
              </div>
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

              <Rating score={movie.rating} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.cache.get('movies'),
});

const mapDispatchToProps = dispatch => ({
  onMovieRequest: (id) => dispatch(requestMovie(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);

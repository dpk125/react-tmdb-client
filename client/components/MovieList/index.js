import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestMovies } from '../../core/modules/cache/cacheActions';
import { Movie } from '../Movie/index';
import { endpoint } from '../../core/api/endpoints';
import { Preloader } from '../Preloader';

class MovieList extends React.Component {
  componentWillMount() {
    this.props.onMovieListRequest(this.props.category);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category !== this.props.category) {
      this.props.onMovieListRequest(nextProps.category);
    }
  }

  render() {
    const movies = this.props.cache.get(endpoint.movies(this.props.category));

    if (!movies) {
      return <Preloader />;
    }

    return (
      <div className="movie-list">
        <div className="row">
          {this.props.cache.get(endpoint.movies(this.props.category), []).map(
            movie => (
              <div key={movie.id} className="col-sm-2">
                <Movie {...movie} />
              </div>
            )
          )}
        </div>
      </div>
    )
  }
}

MovieList.propTypes = {
  category: PropTypes.string,
};

const mapStateToProps = state => ({
  cache: state.cache,
});

const mapDispatchToProps = dispatch => ({
  onMovieListRequest: (category) => dispatch(requestMovies(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);

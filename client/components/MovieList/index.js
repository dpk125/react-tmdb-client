import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestMovies } from '../../core/modules/cache/cacheActions';
import { MoviePoster } from '../MoviePoster/index';
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
    const movies = this.props.cache.getIn([endpoint.movies(this.props.category), 'movies'], []);

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
            <InfiniteScroll
              next={() => this.props.onMovieListRequest(this.props.category)}
              hasMore={true}
              loader={<Preloader/>}
            >
              {items}
            </InfiniteScroll>
          </div>
        </div>
    )
  }
}

MovieList.propTypes = {
  category: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
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

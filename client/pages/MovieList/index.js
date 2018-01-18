import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { requestMovies } from "../../core/modules/movies/moviesActions";
import { Movie } from "../../components/Movie";

class MovieList extends React.Component {
  componentWillMount() {
    this.props.onMovieListRequest(this.props.category);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="title">Most popular</div>
        </div>

        <div className="col-sm-9 col-offset-sm-3">
          <div className="movie-list">
            <div className="row">
              {this.props.movies.get(this.props.category).map(
                movie => (
                  <div key={movie.id} className="col-sm-2">
                    <Movie {...movie} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MovieList.propTypes ={
  category: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  onMovieListRequest: (category) => dispatch(requestMovies(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);

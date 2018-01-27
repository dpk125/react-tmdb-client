import React from 'react';
import { connect } from 'react-redux';
import { requestMoviesBySearch } from '../../core/modules/movies/moviesActions';
import { MovieList } from '../../components/MovieList';
import { Preloader } from '../../components/Preloader';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.loadMoreResults = this.loadMoreResults.bind(this);
  }
  componentWillMount() {
  }

  loadMoreResults() {
    this.props.onSearchRequest(this.props.query);
  }

  render() {
    const movies = this.props.search.get('movies');
    const showPreloader = movies.isEmpty() && this.props.search.get('query') !== '';

    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="title">Search</div>
        </div>

        {showPreloader
          ? <Preloader />
          : <div className="col-sm-9 col-offset-sm-3">
              <MovieList movies={movies} paginate={false} />
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  onSearchRequest: (query) => dispatch(requestMoviesBySearch(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

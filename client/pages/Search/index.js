import React from 'react';
import { connect } from 'react-redux';
import { MovieList } from '../../components/MovieList';
import { Preloader } from '../../components/Preloader';
import { requestMoviesBySearch } from '../../core/modules/movies/moviesActions';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.loadMoreResults = this.loadMoreResults.bind(this);
  }

  loadMoreResults() {
    this.props.onSearchRequest(this.props.query);
  }

  render() {
    const movies = this.props.search.get('movies');
    const content = movies.isEmpty() && this.props.search.get('query') !== ''
      ? <h2>No results found for "{this.props.search.get('query')}"</h2>
      : <MovieList movies={movies} paginate={false} />;

    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="title">Search</div>
        </div>

        {this.props.search.get('isLoading')
          ? <Preloader />
          : <div className="col-sm-9 col-offset-sm-3">
              {content}
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  onSearchRequest: (query) => dispatch(requestMoviesBySearch(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

import React from 'react';
import { connect } from 'react-redux';
import { requestMoviesBySearch } from '../../core/modules/search/searchActions';
import { Link } from 'react-router-dom';

export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onMovieSearch = this.onMovieSearch.bind(this);
  }

  onMovieSearch(event) {
    if (this.props.location.pathname !== '/search') {
      this.props.history.push('/search');
    }

    const query = event.target.value;
    this.props.onMovieSearch(query);
  }

  render() {
    return (
      <div className="header-search">
        <input type="text" className="header-search__input" onChange={this.onMovieSearch} />
        <Link to="/search" className="header-search__button">
          <i className="fa fa-search" />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.movies.get('search')
});

const mapDispatchToProps = dispatch => ({
  onMovieSearch: (query) => dispatch(requestMoviesBySearch(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

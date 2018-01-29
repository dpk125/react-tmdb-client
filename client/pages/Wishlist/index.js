import React from 'react';
import { connect } from 'react-redux';
import { MovieList } from '../../components/MovieList';

class Wishlist extends React.Component {
  render() {
    const wishlist = this.props.wishlist;

    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="title">Wishlist</div>
        </div>

        <div className="col-sm-9 col-offset-sm-3">
          {!wishlist
            ? <h2>Your wishlist is empty :(</h2>
            : <MovieList movies={Object.values(wishlist)} paginate={false} />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wishlist: state.wishlist,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wishlist);

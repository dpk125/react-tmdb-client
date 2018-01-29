import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../core/modules/wishlist/wishlistActions';
import { Button } from '../Button';

export class WishlistButton extends React.Component {
  render() {
    const { movie, wishlist } = this.props;

    if (wishlist[movie.id]) {
      return (
        <Button action={this.props.removeFromWishlist.bind(this, movie)}>
          <i className="fa fa-trash" /> Remove
        </Button>
      );
    }

    return (
      <Button action={this.props.addToWishlist.bind(this, movie)}>
        <i className="fa fa-heart" /> Add
      </Button>
    );
  }
}

WishlistButton.propTypes = {
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  wishlist: state.wishlist,
});

const mapDispatchToProps = dispatch => ({
  addToWishlist: (movie) => dispatch(addToWishlist(movie)),
  removeFromWishlist: (movie) => dispatch(removeFromWishlist(movie)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WishlistButton);

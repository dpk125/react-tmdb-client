import React from 'react';
import PropTypes from 'prop-types';
import { getPosterUrl } from '../../core/helpers/imageUrlResolver';

export const Movie = ({ title, rating, poster }) => {
  const style = {};
  if (poster) {
    style.backgroundImage = `url(${getPosterUrl(poster, 'w640')})`;
  } else {
    style.backgroundColor = '#271625';
  }

  return (
    <div className="movie-list-item" style={style}>
      <span className="movie-list-item__rating">{rating || '?'}</span>
      <span className={'movie-list-item__name' + (poster ? '' : ' movie-list-item__name--visible')} >
        {title}
      </span>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  poster: PropTypes.string,
};

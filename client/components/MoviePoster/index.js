import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getPosterUrl } from '../../core/helpers/imageUrlResolver';

export const MoviePoster = ({ id, title, rating, poster }) => {
  const style = {};
  if (poster) {
    style.backgroundImage = `url(${getPosterUrl(poster, 'w640')})`;
  } else {
    style.backgroundColor = '#271625';
  }

  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-list-item" style={style}>
        <span className="movie-list-item__rating">{rating || '-'}</span>
        <span className={'movie-list-item__name' + (poster ? '' : ' movie-list-item__name--visible')} >
          {title}
        </span>
      </div>
    </Link>
  );
}

MoviePoster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  poster: PropTypes.string,
};

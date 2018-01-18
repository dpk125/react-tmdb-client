import React from 'react';
import PropTypes from 'prop-types';
import { getPosterUrl } from "../../core/helpers/imageUrlResolver";

export const Movie = ({ title, rating, poster}) => (
  <div className="movie-list-item"
       style={{ backgroundImage: `url(${getPosterUrl(poster, 'w640')})`}}>
    <span className="movie-list-item__rating">{rating}</span>
    <span className="movie-list-item__name">{title}</span>
  </div>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};

import React from 'react';
import { Link } from 'react-router-dom';
import { MoviePoster } from '../../components/MoviePoster/index';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export const MovieList = ({ movies, loadMovies, paginate = true }) => (
  <div className="movie-list">
    <div className="row">
      {movies.map((movie, index) => (
        <div key={index} className="col-sm-2">
          <Link to={{ pathname: `/movie/${movie.id}`, state: { movie } }}>
            <MoviePoster {...movie} />
          </Link>
        </div>
      ))}
    </div>

    {paginate && !movies.isEmpty() && (
      <Button action={loadMovies}>
        Load more
      </Button>
    )}
  </div>
);

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
  loadMovies: PropTypes.func,
  paginate: PropTypes.bool,
};


import React from 'react';
import MovieList from '../../components/MovieList';

export const CategoryMovieList = ({ category, children }) => (
  <div className="row">
    <div className="col-sm-3">
      <div className="title">{children}</div>
    </div>

    <div className="col-sm-9 col-offset-sm-3">
      <MovieList category={category} />
    </div>
  </div>
);

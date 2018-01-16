import React from 'react';

export const GenreNotSelected = () => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="list">
          <div className="list-item">Comedy</div>
          <div className="list-item">Drama</div>
          <div className="list-item">Action</div>
          <div className="list-item">Horror</div>
          <div className="list-item">Adventure</div>
        </div>
      </div>

      <div className="col-sm-9">
        <div className="genre-title">
          Please select a genre
        </div>

        {/* Preloader example */}
        <div className="preloader" />
      </div>
    </div>
  )
};

import React from 'react';
import { Rating } from './rating';

export const Movie = () => {
  return (
    <div className="row">
      <div className="col-sm-8 col-sm-offset-2">
        <div className="row">
          <div className="col-sm-4">
            <div className="movie-list-item"
                 style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w640/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg')`}}>
              <span className="movie-list-item__rating">6.9</span>
            </div>
          </div>

          <div className="col-sm-8">
            <div className="release-date">
              Release date: <strong>2017-12-0</strong>
            </div>

            <div className="title">
              Jumanji: Welcome to the Jungle
            </div>

            <div className="description">
              The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.
            </div>

            <Rating score="6.9"/>
          </div>
        </div>
      </div>
    </div>
  )
};

import React from 'react';
import { MenuItem } from '../../components/MenuItem';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div className="row">
    <div className="col-sm-5">
      <div className="subtitle">Welcome to</div>
      <div className="title">Movies repository</div>
      <Link to="/genres" className="btn">
        Select a genre
      </Link>
    </div>

    <div className="col-sm-7">
      <div className="menu">
        <div className="row">
          <MenuItem
            backgroundImage="https://image.tmdb.org/t/p/w342/A30ZqEoDbchvE7mCZcSp6TEwB1Q.jpg"
            name="All"
            path="/"
          />
          <MenuItem
            backgroundImage="https://image.tmdb.org/t/p/w342/paT9Ovofjj30JvsDRyhFfjgUEfn.jpg"
            name="Search"
            path="/search"
          />
          <MenuItem
            backgroundImage="https://image.tmdb.org/t/p/w342/vsjBeMPZtyB7yNsYY56XYxifaQZ.jpg"
            name="Genres"
            path="/genres"
          />
          <MenuItem
            backgroundImage="https://image.tmdb.org/t/p/w342/vjZRXcAUH33SHsQeMScwsZcA5uk.jpg"
            name="Most popular"
            path="/most-popular"
          />
          <MenuItem
            backgroundImage="https://image.tmdb.org/t/p/w342/nbIrDhOtUpdD9HKDBRy02a8VhpV.jpg"
            name="Top rated"
            path="/top-rated"
          />
          <MenuItem
            backgroundImage="https://image.tmdb.org/t/p/w342/8fDHXLHYTOLR064YIWxxcVVl2qz.jpg"
            name="Upcoming"
            path="/upcoming"
          />
          <MenuItem
            backgroundImage="https://image.tmdb.org/t/p/w342/xSxlmtLz2NYtO07N4WexY1y53pl.jpg"
            name="Wishlist"
            path="/wishlist"
          />
        </div>
      </div>
    </div>
  </div>
);

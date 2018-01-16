import React from 'react';

export const List = () => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="title">Most popular</div>
      </div>

      <div className="col-sm-9 col-offset-sm-3">
        <div className="movie-list">
          <div className="row">
            <div className="col-sm-2">
              <div className="movie-list-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w640/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg')`}}>
                <span className="movie-list-item__rating">6.9</span>
                <span className="movie-list-item__name">Movie name</span>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="movie-list-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w640/xGWVjewoXnJhvxKW619cMzppJDQ.jpg')`}}>
                <span className="movie-list-item__rating">2.9</span>
                <span className="movie-list-item__name">Movie name</span>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="movie-list-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w640/47pLZ1gr63WaciDfHCpmoiXJlVr.jpg')`}}>
                <span className="movie-list-item__rating">9.1</span>
                <span className="movie-list-item__name">Movie name</span>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="movie-list-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w640/dfhztJRiElqmYW4kpvjYe1gENsD.jpg')`}}>
                <span className="movie-list-item__rating">6.3</span>
                <span className="movie-list-item__name">Movie name</span>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="movie-list-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w640/wridRvGxDqGldhzAIh3IcZhHT5F.jpg')`}}>
                <span className="movie-list-item__rating">9,7</span>
                <span className="movie-list-item__name">Movie name</span>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="movie-list-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w640/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg')`}}>
                <span className="movie-list-item__rating">2.2</span>
                <span className="movie-list-item__name">Movie name</span>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="movie-list-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w640/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg')`}}>
                <span className="movie-list-item__rating">6.9</span>
                <span className="movie-list-item__name">Movie name</span>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="movie-list-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w640/q0R4crx2SehcEEQEkYObktdeFy.jpg')`}}>
                <span className="movie-list-item__rating">9,7</span>
                <span className="movie-list-item__name">Movie name</span>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="movie-list-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w640/m2JxGgarPvtemudLZ1CB6gLJeUb.jpg')`}}>
                <span className="movie-list-item__rating">2.2</span>
                <span className="movie-list-item__name">Movie name</span>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="movie-list-item"
                   style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w640/lQUJZIm2nQj4mIsm0sUcznhMdpD.jpg')`}}>
                <span className="movie-list-item__rating">6.9</span>
                <span className="movie-list-item__name">Movie name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

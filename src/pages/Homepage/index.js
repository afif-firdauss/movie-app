import React, { useEffect } from 'react';
import { Movie, Genres } from '../../components';
import './homepage.css';

const Homepage = () => {
  useEffect(() => {
    document.title = 'MDB-Movie';
  })

  return (
    <div className="container flex-grow-1 py-4">
      <div className="row">
        <div className="col-md-3">
          <Genres />
        </div>
        <div className="col-md-9">
          <Movie />
        </div>
      </div>
    </div>
  )
}

export default Homepage;

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer, Navbar } from '../../components';
import { Homepage, MovieDetails, NotFound } from '../../pages';

const Navigation = () => {
  return (
    <Router>
      <div className="homepage">
        <Navbar/>
          <Routes>
            <Route path="movie-details/:id" element={<MovieDetails/>}/>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default Navigation;
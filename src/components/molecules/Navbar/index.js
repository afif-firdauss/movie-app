import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="link-to">MDB-Movie</Link>
      </div>
    </div>
  )
}

export default Navbar;
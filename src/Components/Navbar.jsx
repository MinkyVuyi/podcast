import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="nav nav-pills flex-row P-2">
      <Link to="/" className="flex-sm-fill text-sm-center nav-link text-light" aria-current="page">
  <img
    src={require("../public/logo.jpeg")}
    alt="logo"
    className="img-fluid" // Add the img-fluid class
    style={{ maxWidth: '50px' }} // Optionally set a max width
  />
</Link>

        <a className="flex-sm-fill text-sm-center nav-link dropdown-toggle text-light" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
          Genres
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Personal Growth</a></li>
          <li><a className="dropdown-item" href="#">True Crime & Investigative Journalism</a></li>
          <li><a className="dropdown-item" href="#">History</a></li>
          <li><a className="dropdown-item" href="#">Comedy</a></li>
          <li><a className="dropdown-item" href="#">Entertainment</a></li>
          <li><a className="dropdown-item" href="#">Business</a></li>
          <li><a className="dropdown-item" href="#">Fiction</a></li>
          <li><a className="dropdown-item" href="#">News</a></li>
          <li><a className="dropdown-item" href="#">Kids & Family</a></li>
        </ul>
        <Link to="/podcasts" className="flex-sm-fill text-sm-center nav-link text-light" href="#">
          Podcasts
        </Link>
        <Link to="/about" className="flex-sm-fill text-sm-center nav-link text-light" href="#">
          About
        </Link>
        <Link to="/favourites" className="flex-sm-fill text-sm-center nav-link text-light" href="#">
          Favourites
        </Link>
      </nav>
  );
};

export default Navbar;

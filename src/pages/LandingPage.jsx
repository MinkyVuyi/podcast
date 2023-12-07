import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/landing.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Navbar />
      <h1 className="display-4 text-white">
        Discover Tranquility and Inspiration
      </h1>
      <Link to="/AuthPage" className="btn btn-primary mt-3">
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;

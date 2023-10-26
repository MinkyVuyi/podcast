import React from 'react';
import { Link } from 'react-router-dom';

import backgroundImage from 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpodcast&psig=AOvVaw0Hg0zjpeNkH3zhi5CS-XmX&ust=1698165050431000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjQ0PjLjIIDFQAAAAAdAAAAABAE';

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 className="display-4 text-white">
        Discover Tranquility and Inspiration
      </h1>
      <Link to="/auth" className="btn btn-primary mt-3">
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;

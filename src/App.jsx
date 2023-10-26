import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Podcasts from './Components/Pages/Podcasts';
import ShowDetails from './Components/Pages/ShowDetails';
import Favourites from './Components/Favourites';
import AuthPage from './Components/Pages/AuthPage'; // Import your AuthPage component
import LandingPage from './Components/Pages/LandingPage'; // Import your LandingPage component

function App() {
  return (
    <BrowserRouter>
      <header className="bg-dark">
        <nav className="nav nav-pills flex-row P-2">
          <Link to="/" className="flex-sm-fill text-sm-center nav-link  text-light" aria-current="page" href="#">Home</Link>
          <a className="flex-sm-fill text-sm-center nav-link dropdown-toggle text-light" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Genres</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Personal Growth</a></li>
            <li><a className="dropdown-item" href="#">True Crime& Investigative Journalism</a></li>
            <li><a className="dropdown-item" href="#">History</a></li>
            <li><a className="dropdown-item" href="#">Comedy</a></li>
            <li><a className="dropdown-item" href="#">Entertainment</a></li>
            <li><a className="dropdown-item" href="#">Business</a></li>
            <li><a className="dropdown-item" href="#">Fiction</a></li>
            <li><a className="dropdown-item" href="#">News</a></li>
            <li><a className="dropdown-item" href="#">Kids & Family</a></li>
          </ul>
          <Link to="/podcasts" className="flex-sm-fill text-sm-center nav-link text-light" href="#">Podcasts</Link>
          <Link to="/about" className="flex-sm-fill text-sm-center nav-link text-light" href="#">About</Link>
          <Link to="/favourites" className="flex-sm-fill text-sm-center nav-link text-light" href="#">Favourites</Link>
          <Link to="/auth" className="flex-sm-fill text-sm-center nav-link text-light">Get Started</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/podcasts/:id" element={<ShowDetails />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

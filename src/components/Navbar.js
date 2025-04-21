import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload Resources</Link></li>
        <li><Link to="/materials">Learning Materials</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

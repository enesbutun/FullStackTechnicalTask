import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>Cynomi Tech Task</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/table">Data Table</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

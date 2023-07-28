// components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

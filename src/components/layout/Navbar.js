import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="orange">
        <div className="nav-wrapper">
          <Link to="/" class="brand-logo">
            Nevernote
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

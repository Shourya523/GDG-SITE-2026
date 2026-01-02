import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
            <img src="https://raw.githubusercontent.com/dsc-jiit-128/GDSC-Lead-Map/main/gdsc-logo.gif" alt="GDSC Logo" />
        </div>

        <ul className="navbar-links">
          <li><a href="#events">Events</a></li>
          <li><a href="#teams">Teams</a></li>
          <li><a href="#bitbox">BitBox</a></li>
          <li><a href="#studyjam">StudyJam</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
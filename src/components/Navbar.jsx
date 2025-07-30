import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaTint,
  FaHome,
  FaHeartbeat,
  FaSearch,
  FaInfoCircle,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.href = '/login';
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <div className="navbar">
      {/* Hamburger Button */}
      <button className="hamburger-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`quick-access-container ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>

        <h2 className="quick-access-title">Quick Access</h2>

        <div className="quick-link-box">
          <Link to="/" className="quick-link" onClick={toggleNavbar}>
            <FaHome className="icon" /> Home
          </Link>

          <Link to="/healthcare-camp" className="quick-link" onClick={toggleNavbar}>
            <FaHeartbeat className="icon" /> HealthCare Camp
          </Link>

          <Link to="/blood-donation" className="quick-link" onClick={toggleNavbar}>
            <FaTint className="icon" /> Blood Donation
          </Link>

          <Link to="/BloodAvailability" className="quick-link" onClick={toggleNavbar}>
            <FaSearch className="icon" /> Blood Availability
          </Link>


          <Link to="/about" className="quick-link" onClick={toggleNavbar}>
            <FaInfoCircle className="icon" /> About
          </Link>


          <div
            className="quick-link"
            onClick={() => {
              const isLoggedIn = localStorage.getItem('auth');
              if (isLoggedIn) {
                localStorage.removeItem('auth');
                window.location.href = '/login';
              } else {
                toggleNavbar();
                window.location.href = '/login';
              }
            }}
          >
            {localStorage.getItem('auth') ? (
              <>
                <FaSignOutAlt className="icon" /> Logout
              </>
            ) : (
              <>
                <FaSignInAlt className="icon" /> Login
              </>
            )}
          </div>


          <div className="quick-link" onClick={toggleDarkMode}>
            {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;                                                                                       
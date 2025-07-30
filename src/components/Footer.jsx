import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Blood Donation</h3>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/blood-donation">Blood Donation</Link></li>
          <li><Link to="/healthcare-camp">HealthCare Camp</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <div className="Contact">
        <h3>Contact-Info</h3>
        <ul>
          <li>Contact No: +91-9955619557</li>
          <li>Email Id: rajputrajnishraj7@gmail.com</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

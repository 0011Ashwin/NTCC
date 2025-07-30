import React from 'react';
import Footer from './components/Footer';
import LearnAboutDonation from './components/LearnAboutDonation.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HealthCareCamp from './components/HealthCareCamp';
import BloodDonation from './components/BloodDonationPortal';
import Login from './components/Login';
import BloodAvailability from './components/BloodAvailability.jsx';
import About from './components/About';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/healthcare-camp" element={<PrivateRoute element={<HealthCareCamp />} />} />
        <Route path="/blood-donation" element={<PrivateRoute element={<BloodDonation />} />} />
        <Route path="/about" element={<PrivateRoute element={<About />} />} />
        <Route path="/BloodAvailability" element={<PrivateRoute element={<BloodAvailability />} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
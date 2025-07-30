import React, { useState } from 'react';
import './BackgroundSection.css';

function BloodDonation() {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    contact: '',
    donationDate: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowPopup(true); // show popup after successful registration
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="form-background">
      <div className="form-card">
        <h2>Blood Donation Registration</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="bloodGroup" placeholder="Blood Group (e.g., A+)" onChange={handleChange} required />
          <input name="contact" placeholder="Contact Number" onChange={handleChange} required />
          <input name="donationDate" type="date" onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Thank You for Registering!</h3>
            <p>You can donate blood at your nearest hospital or donation center.</p>
            <p>We’ll also notify you via your contact number: <strong>{formData.contact}</strong></p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BloodDonation;

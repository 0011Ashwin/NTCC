import React, { useState } from 'react';
import './HealthCareRegistration.css';

const HealthCareRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    location: '',
    symptoms: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="registration-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>HealthCare Camp Registration</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        >
          <option value="">--Please choose a location--</option>
          <option value="IGIMS">IGIMS, Patna</option>
          <option value="shrinivas">Shrinivas, Patna</option>
          <option value="hospital">S.S Hospital, Patna</option>
          <option value="paras">PARAS HRMI Hospital, Patna</option>
          <option value="cns">CNS Hospital, Patna</option>
        </select>

        <textarea
          name="symptoms"
          placeholder="Symptoms / Issues"
          value={formData.symptoms}
          onChange={handleChange}
          rows="4"
          required
        />

        <button type="submit">Register</button>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Thank You, {formData.name}!</h3>
            <p>You are successfully registered for the HealthCare Camp.</p>
            <p>Venue: <strong>{formData.location}</strong></p>
            <p>We will contact you soon at: <strong>{formData.contact}</strong></p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthCareRegistration;

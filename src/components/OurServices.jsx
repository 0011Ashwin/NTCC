import React from 'react';
import './OurServices.css';

const services = [
  { id: 1, label: 'Blood Availability', icon: '/slides/download.png', url: '/BloodAvailability' },
  { id: 2, label: 'HealthCare Camp', icon: '/slides/blood-center-directory-icon.png', url: '/healthcare-camp' },
  { id: 3, label: 'Blood Donation Camps', icon: '/slides/blood-donation-camps-icon.png', url: '/blood-donation' },
  { id: 4, label: 'Donor Login', icon: '/slides/donor-login-icon.png', url: '/login' },
  { id: 5, label: 'Register Voluntary Blood Camp', icon: '/slides/register-vbd-icon.png', url: '/register-voluntary-blood-camp' },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map(service => (
          <a key={service.id} href={service.url} className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={service.icon} alt={service.label} />
            <p>{service.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default OurServices;

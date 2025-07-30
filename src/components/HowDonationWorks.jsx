import React from 'react';
import './HowDonationWorks.css';

const steps = [
  {
    id: 1,
    title: 'Registration Process',
    description: 'Sign up and schedule your first with ease',
    icon: '/slides/id-card.png', // Placeholder icon path
  },
  {
    id: 2,
    title: 'Health Screening',
    description: 'A simple check-up to ensure you’re ready to donate',
    icon: '/slides/charity-day.png', // Placeholder icon path
  },
  {
    id: 3,
    title: 'Donation Day',
    description: 'Relax as our professional staff guide you through',
    icon: '/slides/world-blood-donor-day.png', // Placeholder icon path
  },
];

const HowDonationWorks = () => {
  return (
    <section className="how-donation-works">
      <h2>How <span className="highlight">Donation</span> Works?</h2>
      <div className="steps-container">
        {steps.map(step => (
          <div key={step.id} className="step-card">
            <img src={step.icon} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowDonationWorks;

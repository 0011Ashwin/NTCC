import React from 'react';
import './TypesOfDonation.css';

const types = [
  {
    id: 1,
    title: 'Whole Blood Donation',
    description: 'The most common type of blood donation where whole blood is collected.',
    icon: '/slides/whole-blood-icon.png', // Placeholder icon path
  },
  {
    id: 2,
    title: 'Platelet Donation',
    description: 'Only platelets are collected and the rest of the blood is returned to the donor.',
    icon: '/slides/platelet-icon.png', // Placeholder icon path
  },
  {
    id: 3,
    title: 'Plasma Donation',
    description: 'Plasma is collected and the remaining blood components are returned to the donor.',
    icon: '/slides/plasma-icon.png', // Placeholder icon path
  },
];

const TypesOfDonation = () => {
  return (
    <section className="types-of-donation">
      <h2>Types of Donation</h2>
      <div className="types-container">
        {types.map(type => (
          <div key={type.id} className="type-card">
            <img src={type.icon} alt={type.title} />
            <h3>{type.title}</h3>
            <p>{type.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TypesOfDonation;

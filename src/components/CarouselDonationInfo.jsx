import React, { useState } from 'react';
import './CarouselDonationInfo.css';

const donationInfo = [
  {
    id: 1,
    title: 'It takes only an hour',
    description: 'Donate blood save lives!',
    icon: '/slides/clock-icon.png', // Replace with actual icon path
  },
  {
    id: 2,
    title: 'You will get free refreshments after donation',
    description: 'You will get free refreshments after donation',
    icon: '/slides/refresh.png', // Replace with actual icon path
  },
  {
    id: 3,
    title: 'It costs nothing',
    description: 'Give blood and stay healthy',
    icon: '/slides/cost-icon.png', // Replace with actual icon path
  },
  {
    id: 4,
    title: 'There is no risk',
    description: 'Blood donation is safe and sterile',
    icon: '/slides/safety-icon.png', // Replace with actual icon path
  },
];

const CarouselDonationInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? donationInfo.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === donationInfo.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="carousel-donation-info">
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous Slide">
          &#10094;
        </button>
        <div className="carousel-slide">
          <div className="info-card" key={donationInfo[currentIndex].id}>
            <img src={donationInfo[currentIndex].icon} alt={donationInfo[currentIndex].title} className="info-icon" />
            <h3>{donationInfo[currentIndex].title}</h3>
            <p>{donationInfo[currentIndex].description}</p>
          </div>
        </div>
        <button className="carousel-btn next" onClick={nextSlide} aria-label="Next Slide">
          &#10095;
        </button>
      </div>
      <div className="carousel-dots">
        {donationInfo.map((item, index) => (
          <span
            key={item.id}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>

        ))}
      </div>
    </section >
  );
};

export default CarouselDonationInfo;

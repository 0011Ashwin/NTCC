import React, { useEffect, useState } from 'react';
import './Home.css';
import TypesOfDonation from './TypesOfDonation';
import OurServices from './OurServices.jsx';
import LearnAboutDonation from './LearnAboutDonation.jsx';
import HowDonationWorks from './HowDonationWorks';
import Testimonial from './Testimonial.jsx';
import BloodStats from './BloodStats.jsx';


const slides = [
  {
    id: 1,
    image: '/slides/slide1.png',
    type: 'leaders',
    heading: 'Together We Thrive:',
    subheading: 'One Nation, One Platform,\nOne Solution',
    showButton: false,
  },
  {
    id: 2,
    image: '/slides/slide2.png',
    type: 'blood-donor-day',
    heading: 'Give Blood  Give Hope Together',
    subheading:
      'WE SAVE LIVES!\nFind blood instantly. Locate nearby blood banks.\nRegister as a donor. Save lives with just one Scan.',
    showButton: false,
    date: '14 June 2025',
  },
  {
    id: 3,
    image: '/slides/slide3.png',
    type: 'donate',
    heading: 'Donate Blood, Save Lives',
    subheading:
      'Make a life-changing Impact: Donate blood, save lives.\nTogether, We can heal communities.',
    showButton: true,
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow-container">
      <img
        src={currentSlide.image}
        alt={`Slide ${currentIndex + 1}`}
        className="slide-image"
      />

      <div className="slide-overlay">
        <h1>{currentSlide.heading}</h1>
        <p>{currentSlide.subheading.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>

        {currentSlide.showButton && (
          <button className="donate-btn" onClick={() => window.location.href = "/login"}>
            Login
          </button>
        )}

        {currentSlide.id === 2 && (
          <div className="qr-section">
            <p>Scan the QR code to download the app now.</p>
            <h4 className="donor-date">
              World Blood Donor Day – {currentSlide.date}
            </h4>
          </div>
        )}
      </div>

      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            role="button"
            tabIndex={0}
          ></span>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Slideshow />
      <TypesOfDonation />
      <OurServices />
      <LearnAboutDonation />
      <HowDonationWorks />
      <Testimonial />
      <BloodStats />
    </>
  );
};

export default Home;

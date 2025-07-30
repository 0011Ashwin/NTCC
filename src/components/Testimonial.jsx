import React from 'react';
import './Testimonial.css';

const testimonials = [
    {
        quote: "Donating blood was quick and easy. I felt like I made a difference!",
        name: "Kaushal Choudhary",
        rating: 5
    },
    {
        quote: "I never thought saving lives could be this simple. Proud to be a regular donor.",
        name: "Anjali Mehta",
        rating: 4
    },
    {
        quote: "The staff was friendly and the process was safe. I’ll definitely donate again.",
        name: "Vikram Singh",
        rating: 5
    }
];

const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>&#9733;</span>
        );
    }
    return stars;
};

const Testimonial = () => {
    return (
        <section className="testimonials">
            <h2>What Our Donors Say</h2>
            <div className="testimonial-container">
                {testimonials.map((t, index) => (
                    <div className="testimonial-card" key={index}>
                        <p>"{t.quote}"</p>
                        <h4>- {t.name}</h4>
                        <div className="stars">{renderStars(t.rating)}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;

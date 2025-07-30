import React from 'react';
import './WhatsPeopleSay.css';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        feedback: 'This platform made blood donation so easy and accessible!',
    },
    {
        id: 2,
        name: 'Jane Smith',
        feedback: 'I found a blood donor quickly thanks to this amazing service.',
    },
    {
        id: 3,
        name: 'Michael Johnson',
        feedback: 'The healthcare camp registration was smooth and well organized.',
    },
];

const WhatsPeopleSay = () => {
    return (
        <section className="whats-people-say">
            <h2>What People Say</h2>
            <div className="testimonials-container">
                {testimonials.map(({ id, name, feedback }) => (
                    <div key={id} className="testimonial-card">
                        <p className="feedback">"{feedback}"</p>
                        <p className="name">- {name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatsPeopleSay;

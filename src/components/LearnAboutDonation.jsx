import React, { useState } from 'react';
import './LearnAboutDonation.css';

const bloodTypes = ['A+', 'O+', 'B+', 'AB+', 'A-', 'O-', 'B-', 'AB-'];

const LearnAboutDonation = () => {
    const [selectedBloodType, setSelectedBloodType] = useState('A+');

    const compatibility = {
        'A+': {
            canTakeFrom: ['O+', 'O-', 'A+', 'A-'],
            canGiveTo: ['A+', 'AB+'],
        },
        'O+': {
            canTakeFrom: ['O+', 'O-'],
            canGiveTo: ['O+', 'A+', 'B+', 'AB+'],
        },
        'B+': {
            canTakeFrom: ['O+', 'O-', 'B+', 'B-'],
            canGiveTo: ['B+', 'AB+'],
        },
        'AB+': {
            canTakeFrom: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
            canGiveTo: ['AB+'],
        },
        'A-': {
            canTakeFrom: ['O-', 'A-', 'A+'],
            canGiveTo: ['A+', 'A-', 'AB+', 'AB-'],
        },
        'O-': {
            canTakeFrom: ['O-'],
            canGiveTo: ['O-', 'A-', 'B-', 'AB-'],
        },
        'B-': {
            canTakeFrom: ['O-', 'B-', 'B+'],
            canGiveTo: ['B+', 'B-', 'AB+', 'AB-'],
        },
        'AB-': {
            canTakeFrom: ['O-', 'A-', 'B-', 'AB-'],
            canGiveTo: ['AB+', 'AB-'],
        },
    };

    const handleBloodTypeClick = (type) => {
        setSelectedBloodType(type);
    };

    const currentCompatibility = compatibility[selectedBloodType] || { canTakeFrom: [], canGiveTo: [] };

    return (
        <section className="learn-about-donation">
            <h2>Learn About Donation</h2>
            <div className="blood-type-selector">
                {bloodTypes.map((type) => (
                    <button
                        key={type}
                        className={`blood-type-btn ${selectedBloodType === type ? 'selected' : ''}`}
                        onClick={() => handleBloodTypeClick(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <div className="compatibility-info">
                <div className="info-card take-from">
                    <div className="avatar avatar-take"></div>
                    <div>
                        <p><strong>You can take from</strong></p>
                        <p>{currentCompatibility.canTakeFrom.join('  ')}</p>
                    </div>
                </div>
                <div className="info-card give-to">
                    <div className="avatar avatar-give"></div>
                    <div>
                        <p><strong>You can give to</strong></p>
                        <p>{currentCompatibility.canGiveTo.join('  ')}</p>
                    </div>
                </div>
                <div className="donation-image">
                    <img src="/slides/blood-donation.png" alt="Blood Donation" />
                    <p>One Blood Donation can save up to <span className="highlight">Three</span> Lives</p>
                </div>
            </div>
        </section>
    );
};

export default LearnAboutDonation;

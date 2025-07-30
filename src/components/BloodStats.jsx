import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './BloodStats.css';

const BloodStats = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section className="blood-stats-section" ref={ref}>
            <h2 className="blood-stats-title">Daily Blood Donation Stats</h2>
            <div className="stats-container">
                <div className="stat-card">
                    <p className="stat-label">Avg. Units Needed / Year</p>
                    {inView && <CountUp className="stat-value red" end={14600000} duration={2.5} separator="," />}
                </div>

                <div className="stat-card">
                    <p className="stat-label">Avg. Units Collected / Year</p>
                    {inView && <CountUp className="stat-value green" end={13600000} duration={2.5} separator="," />}
                </div>

                <div className="stat-card">
                    <p className="stat-label">Avg. Units Shortage / Year</p>
                    {inView && <CountUp className="stat-value orange" end={1000000} duration={2.5} separator="," />}
                </div>
            </div>
        </section>
    );
};

export default BloodStats;

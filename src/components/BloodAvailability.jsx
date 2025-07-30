import React, { useState } from 'react';
import './BloodAvailability.css';

const mockData = [
    { hospital: 'IGIMS, Patna', bloodGroup: 'A+', units: 12 },
    { hospital: 'S.S Hospital, Patna', bloodGroup: 'B+', units: 6 },
    { hospital: 'PARAS HRMI HOSPITAL, Patna', bloodGroup: 'O-', units: 4 },
    { hospital: 'CNS Hospital, Patna', bloodGroup: 'A+', units: 8 },
    { hospital: 'S.S Hospital, Patna', bloodGroup: 'B-', units: 23 },
    { hospital: 'Shrinivas Hospital, Patna', bloodGroup: 'O+', units: 12 }
];

function BloodAvailability() {
    const [searchGroup, setSearchGroup] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = mockData.filter(
            (item) => item.bloodGroup.toUpperCase() === searchGroup.toUpperCase()
        );
        setResults(filtered);
    };

    return (
        <div className="availability-container">
            <div className="availability-card">
                <h2>Check Blood Availability</h2>
                <form className="availability-form" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Enter Blood Group (e.g., A+)"
                        value={searchGroup}
                        onChange={(e) => setSearchGroup(e.target.value)}
                        required
                    />
                    <button type="submit">Search</button>
                </form>

                <div className="results">
                    {results.length > 0 ? (
                        results.map((item, index) => (
                            <div className="result-card" key={index}>
                                <h3>{item.hospital}</h3>
                                <p>Blood Group: {item.bloodGroup}</p>
                                <p>Units Available: {item.units}</p>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No results found. Try a different group.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BloodAvailability;

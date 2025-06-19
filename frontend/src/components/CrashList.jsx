import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CrashList = () => {
  const [crashes, setCrashes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/crashes')
      .then(res => setCrashes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-neon mb-4">Flight Crash Incidents</h1>
      <div className="space-y-4">
        {crashes.map(crash => (
          <div key={crash.id} className="bg-gray-900 border border-neon p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{crash.aircraft_type} - {crash.date}</h2>
            <p><strong>Location:</strong> {crash.location}</p>
            <p><strong>Fatalities:</strong> {crash.fatalities}</p>
            <p className="text-sm mt-1">{crash.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrashList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LiveFlights = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    async function fetchFlights() {
      try {
        const res = await axios.get('http://localhost:3001/api/flights');
        setFlights(res.data.slice(0, 30)); // Limit to 30 for performance
      } catch (err) {
        console.error(err);
      }
    }

    fetchFlights();

    const interval = setInterval(fetchFlights, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-gray-900 border border-neon rounded max-h-[400px] overflow-auto text-neon">
      <h2 className="text-xl font-bold mb-2">Live Flights (OpenSky)</h2>
      <table className="w-full text-left text-sm">
        <thead>
          <tr>
            <th>Callsign</th>
            <th>Country</th>
            <th>Altitude (m)</th>
            <th>Velocity (m/s)</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight.icao24} className="border-b border-neon/50">
              <td>{flight.callsign}</td>
              <td>{flight.origin_country}</td>
              <td>{flight.baro_altitude ? flight.baro_altitude.toFixed(0) : 'N/A'}</td>
              <td>{flight.velocity ? flight.velocity.toFixed(1) : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LiveFlights;

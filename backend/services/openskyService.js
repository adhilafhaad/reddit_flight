const axios = require('axios');

const OPENSKY_API = 'https://opensky-network.org/api/states/all';

async function fetchLiveFlights() {
  try {
    const response = await axios.get(OPENSKY_API);
    // Extract relevant fields for demo:
    const flights = response.data.states.map(flight => ({
      icao24: flight[0],
      callsign: flight[1]?.trim() || 'N/A',
      origin_country: flight[2],
      time_position: flight[3],
      last_contact: flight[4],
      longitude: flight[5],
      latitude: flight[6],
      baro_altitude: flight[7],
      velocity: flight[9],
      heading: flight[10],
    }));
    return flights;
  } catch (error) {
    console.error('Error fetching OpenSky data:', error.message);
    return [];
  }
}

module.exports = { fetchLiveFlights };

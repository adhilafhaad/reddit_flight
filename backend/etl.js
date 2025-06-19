const pool = require('./db');
const axios = require('axios');

async function runETL() {
  const url = 'https://example.com/sample-flight-crash-data.json'; // Replace later

  try {
    const response = await axios.get(url);
    const data = response.data;

    for (const crash of data) {
      await pool.query(
        'INSERT INTO crashes (date, location, aircraft_type, fatalities, description) VALUES (?, ?, ?, ?, ?)',
        [crash.date, crash.location, crash.aircraft_type, crash.fatalities, crash.description]
      );
    }

    console.log('Data loaded!');
  } catch (err) {
    console.error('ETL failed:', err.message);
  }
}

runETL();

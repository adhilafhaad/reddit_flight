const express = require('express');
const router = express.Router();
const { fetchLiveFlights } = require('../services/openskyService');

router.get('/', async (req, res) => {
  const flights = await fetchLiveFlights();
  res.json(flights);
});

module.exports = router;

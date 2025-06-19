const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all crashes
router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM crashes ORDER BY date DESC LIMIT 100');
  res.json(rows);
});

module.exports = router;

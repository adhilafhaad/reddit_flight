const express = require('express');
const cors = require('cors');
require('dotenv').config();

const crashRoutes = require('./routes/crashes');
const flightsRoutes = require('./routes/flights');
const redditRoutes = require('./routes/reddit');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/crashes', crashRoutes);
app.use('/api/flights', flightsRoutes);
app.use('/api/reddit', redditRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

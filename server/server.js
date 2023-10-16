const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const dotenv = require('dotenv');
dotenv.config();

const app = express();


// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Routes / API Endpoints
app.get('/', (req, res) => {
  res.send('Server is running');
});
// Import job application routes
const jobApplicationsRoutes = require('./routes/jobApplicationsRoutes.js');
app.use('/api', jobApplicationsRoutes);

// Define this route at the end of your route definitions
app.all('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

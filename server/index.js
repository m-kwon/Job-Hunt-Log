const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./database/db.js');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const jobRoutes = require('./routes/jobRoutes');
const dotenv = require('dotenv');
dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));


// Routes
app.get('/', (req, res) =>{
  res.send('Server is running!');
});

app.use('/api/jobs', jobRoutes)

// Start server
const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
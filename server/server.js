import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import 'dotenv/config';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Routes / API Endpoints

// Start server
const port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

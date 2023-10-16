const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  user: process.env.PG_USERNAME,
  host: 'localhost',
  database: process.env.PG_DB_NAME,
  password: process.env.PG_PASSWORD,
  port: 5432,
});

// Create a new job application
async function createJobApplication(jobApplicationData) {
  const client = await pool.connect();
  try {
    const { title, company, job_url, application_date } = jobApplicationData;

    const query = 'INSERT INTO job_hunt_log.applications (title, company, job_url, application_date) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [title, company, job_url, application_date];

    const result = await client.query(query, values);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Retrieve a list of job applications
async function getJobApplications() {
  const query = 'SELECT * FROM job_hunt_log.applications';
  const result = await pool.query(query);
  return result.rows;
}

// Retrieve a specific job application by ID
async function getJobApplication(jobApplicationId) {
  const query = 'SELECT * FROM job_hunt_log.applications WHERE id = $1';
  const result = await pool.query(query, [jobApplicationId]);
  return result.rows[0];
}

// Update a job application by ID
async function updateJobApplication(jobApplicationId, updatedData) {
  const client = await pool.connect();
  try {
    const { title, company, job_url, application_date } = updatedData;

    const query = 'UPDATE job_hunt_log.applications SET title = $1, company = $2, job_url = $3, application_date = $4 WHERE id = $5 RETURNING *';
    const values = [title, company, job_url, application_date, jobApplicationId];

    const result = await client.query(query, values);
    return result.rows[0];
  } finally {
    client.release();
  }
}

// Delete a job application by ID
async function deleteJobApplication(jobApplicationId) {
  const client = await pool.connect();
  try {
    const query = 'DELETE FROM job_hunt_log.applications WHERE id = $1';
    const result = await client.query(query, [jobApplicationId]);
    return result.rowCount === 1; // Return true if a row was deleted
  } finally {
    client.release();
  }
}

module.exports = {
  createJobApplication,
  getJobApplications,
  getJobApplication,
  updateJobApplication,
  deleteJobApplication,
};

const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsController');

// Add a new applied job
router.post('/jobs', jobsController.addJob);

// Retrieve all applied jobs
router.get('/jobs', jobsController.getJobs);

// Retrieve a specific applied job by ID
router.get('/jobs/:id', jobsController.getJob);

// Update an applied job by ID
router.put('/jobs/:id', jobsController.updateJob);

// Delete an applied job by ID
router.delete('/jobs/:id', jobsController.deleteJob);

module.exports = router;
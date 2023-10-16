const express = require('express');
const router = express.Router();
const jobApplicationsController = require('../controllers/jobApplicationsController');

// Creating a new job application
router.post('/job-applications', jobApplicationsController.createJobApplication);

// Retrieving a list of job applications
router.get('/job-applications', jobApplicationsController.getJobApplications);

// Retrieving a specific job application by ID
router.get('/job-applications/:id', jobApplicationsController.getJobApplication);

// Updating a job application by ID
router.put('/job-applications/:id', jobApplicationsController.updateJobApplication);

// Deleting a job application by ID
router.delete('/job-applications/:id', jobApplicationsController.deleteJobApplication);

module.exports = router;
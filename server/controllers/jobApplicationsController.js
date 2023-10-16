const jobApplicationModel = require('../models/jobApplicationModel');

// Create a new job application
async function createJobApplication(req, res) {
  try {
    const jobApplicationData = req.body;
    const newJobApplication = await jobApplicationModel.createJobApplication(jobApplicationData);
    res.status(201).json(newJobApplication);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Retrieve a list of job applications
async function getJobApplications(req, res) {
  try {
    const jobApplications = await jobApplicationModel.getJobApplications();
    res.status(200).json(jobApplications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Retrieve a specific job application by ID
async function getJobApplication(req, res) {
  try {
    const { id } = req.params;
    const jobApplication = await jobApplicationModel.getJobApplication(id);
    if (jobApplication) {
      res.status(200).json(jobApplication);
    } else {
      res.status(404).json({ error: 'Job application not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Update a job application by ID
async function updateJobApplication(req, res) {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedJobApplication = await jobApplicationModel.updateJobApplication(id, updatedData);
    if (updatedJobApplication) {
      res.status(200).json(updatedJobApplication);
    } else {
      res.status(404).json({ error: 'Job application not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

// Delete a job application by ID
async function deleteJobApplication(req, res) {
  try {
    const { id } = req.params;
    const success = await jobApplicationModel.deleteJobApplication(id);
    if (success) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Job application not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {
  createJobApplication,
  getJobApplications,
  getJobApplication,
  updateJobApplication,
  deleteJobApplication,
};
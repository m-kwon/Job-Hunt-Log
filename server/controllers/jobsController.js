const asyncHandler = require('express-async-handler');
const Job = require('../models/jobModel');

const addJob = asyncHandler(async (req, res) => {
  const { title, company, job_url, location, salary } = req.body;

  const jobExists = await Job.findOne({ job_url });
  if (jobExists) {
    res.status(400);
    throw new Error('You have already applied for this job');
  };

  const job = await Job.create({
    title,
    company,
    job_url,
    location,
    salary,
  });
  if (job) {
    res.status(201).json({
      _id: job._id,
      title: job.title,
      company: job.company,
      job_url: job.job_url,
      location: job.location,
      salary: job.salary,
    });
  } else {
    res.status(400);
    throw new Error('Invalid job data');
  };
});

const getJob = asyncHandler(async (req, res) => {
  const job = {
    _id: req.job._id,
    title: req.job.title,
    company: req.job.company,
    job_url: req.job.job_url,
    location: req.job.location,
    salary: req.job.salary,
  };

  res.status(200).json(job);
});

const getJobs = asyncHandler(async (req, res) => {
  res.send('Hello');
});

const updateJob = asyncHandler(async (req, res) => {
  res.send('Hello');
});

const deleteJob = asyncHandler(async (req, res) => {
  res.send('Hello');
});

module.exports = {
  addJob,
  getJob,
  getJobs,
  updateJob,
  deleteJob,
};
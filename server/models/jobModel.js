const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  job_url: {
    type: String,
    required: true,
    unique: true,
  },
  application_date: {
    type: Date,

  },
  location: {
    type: String,
    required: false,
  },
  salary: {
    type: Number,
    required: false,
  }
}, {
  timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
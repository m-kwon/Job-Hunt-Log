CREATE DATABASE "Job-Hunt-Log";

CREATE SCHEMA IF NOT EXISTS job_hunt_log;

CREATE TABLE IF NOT EXISTS job_hunt_log.applications (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  job_url VARCHAR(255),
  application_date DATE
);
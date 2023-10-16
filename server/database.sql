CREATE DATABASE "Job-Hunt-Log";

CREATE SCHEMA IF NOT EXISTS job_applications;

CREATE TABLE IF NOT EXISTS job_applications.applications (
  id SERIAL PRIMARY KEY,
  job_title VARCHAR(255) NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  job_url VARCHAR(255),
  application_date DATE
);
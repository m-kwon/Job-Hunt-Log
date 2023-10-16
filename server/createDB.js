const fs = require('fs');
const path = require('path');
const pgp = require('pg-promise')();

const dotenv = require('dotenv');
dotenv.config();

const dbConfig = {
  user: process.env.PG_USERNAME,
  host: 'localhost',
  database: process.env.PG_DB_NAME,
  password: process.env.PG_PASSWORD,
  port: 5432,
};

const db = pgp(dbConfig);

const sqlFilePath = path.join(__dirname, 'database.sql');

const sql = fs.readFileSync(sqlFilePath, 'utf-8');

db
  .none(sql)
  .then(() => {
    console.log('SQL file executed successfully');
  })
  .catch((error) => {
    console.error('Error executing SQL file:', error);
  })
  .finally(() => {
    pgp.end();
  });
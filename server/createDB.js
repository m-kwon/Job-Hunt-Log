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

// Name your new database
const newDatabaseName = 'Job_Hunt_Log';

// Execute the CREATE DATABASE command
db.none(`CREATE DATABASE "${newDatabaseName}";`)
  .then(() => {
    console.log(`Database "${newDatabaseName}" created successfully`);
  })
  .catch((error) => {
    console.error(`Error creating database: ${error}`);
  })
  .finally(() => {
    pgp.end();
  });

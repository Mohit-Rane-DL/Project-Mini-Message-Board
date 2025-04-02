const { Pool } = require('pg');
require('dotenv').config();

module.exports = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // This allows you to connect to Railway's private database with SSL enabled
      },
});
const { Pool } = require('pg');
require('dotenv').config();

module.exports = new Pool({
    connectionString: process.env.DATABASE_URL, // The Database URL from Render
    ssl: {
        rejectUnauthorized: false, // Render requires SSL for database connections
        }
});
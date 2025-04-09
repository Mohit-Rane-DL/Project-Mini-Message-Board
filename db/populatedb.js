#! usr/bin/env node

const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE users (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR (255), message TEXT, date DATE
);

INSERT INTO users (username, message, date) 
VALUES ('Amando', 'Hi there', '2025-03-21'), ('Charles', 'Hello World', '2025-03-21');
`;

async function main() {
    console.log('...seeding');
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    try {
        await client.connect();
        await client.query(SQL);
        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding the database:', err);
    } finally {
        await client.end();
    }
    console.log('done');
}

main();
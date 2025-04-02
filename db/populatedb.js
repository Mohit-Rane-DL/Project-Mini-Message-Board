#! usr/bin/env node

const { Client } = require('pg');

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
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
    });

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();
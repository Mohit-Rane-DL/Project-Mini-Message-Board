const pool = require('./pool');

async function getAllUsers() {
    const { rows } = await pool.query('SELECT * FROM users');
    return rows;
}

async function addUser(username, message, date) {
    await pool.query('INSERT INTO users (username, message, date) VALUES ($1, $2, $3)', [username, message, date]);
}

async function deleteUser(username, message) {
    await pool.query('DELETE FROM users WHERE username LIKE $1 OR message LIKE $2', [username, message]);
}

module.exports = {
    getAllUsers,
    addUser,
    deleteUser
};
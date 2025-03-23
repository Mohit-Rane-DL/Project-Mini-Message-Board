const db = require('../db/queries');

async function getUsersGet(req, res) {
    const users = await db.getAllUsers();
    console.log('Users:', users);
    res.render('index', {
        title: 'Users',
        users: users
    });
}

function addUserGet(req, res) {
    res.render('addUser', {
        title: 'Add User'
    });
}

async function addUserPost(req, res) {
    const { username, message } = req.body;
    const date = new Date();
    await db.addUser(username, message, date);
    res.redirect('/');
}

function deleteUserGet(req, res) {
    res.render('deleteUser', {
        title: 'Delete User'
    });
}

async function deleteUserPost(req, res) {
    const { username, message } = req.body;
    await db.deleteUser(username, message);
    res.redirect('/');
}

module.exports = {
    getUsersGet,
    addUserGet,
    addUserPost,
    deleteUserGet,
    deleteUserPost
};
const { Router } = require('express');
const usersController = require('../controllers/usersController');
const usersRouter = Router();

usersRouter.get('/', usersController.getUsersGet);
usersRouter.get('/new', usersController.addUserGet);
usersRouter.post('/new', usersController.addUserPost);
usersRouter.get('/delete', usersController.deleteUserGet);
usersRouter.post('/delete', usersController.deleteUserPost);

module.exports = usersRouter;
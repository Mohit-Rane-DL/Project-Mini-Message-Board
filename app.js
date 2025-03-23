const express = require('express');
const app = express();
const path = require('node:path');
require('dotenv').config();
const usersRouter = require('./routes/usersRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));
app.use('/', usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app is listening on ${PORT}`));
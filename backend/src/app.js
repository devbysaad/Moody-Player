const express = require('express');
const SongRoute = require('./routes/songs.routes');

const app = express();

app.use(express.json());

app.use('/', SongRoute);


module.exports = app;


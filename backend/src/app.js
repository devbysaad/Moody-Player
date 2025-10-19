const express = require('express');
const SongRoute = require('./routes/songs.routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', SongRoute);


module.exports = app;


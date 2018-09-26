var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var games = require('./routes/games');
var scores = require('./routes/scores');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/games', games);
app.use('/api/v1/scores', scores);

module.exports = app;

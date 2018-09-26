var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = require('../config/db');
var connection = mysql.createConnection(db);

// get games
router.get('/', function(req, res, next) {
  var query = "SELECT * FROM game";

  connection.query(query, (error, result) => {
    if(error) throw error;
    res.json({code: 200, response: result});
  });
});

router.post('/', function(req, res, next){
  var query = `INSERT INTO game (team1, team2, status) values ('${req.body.team1}', '${req.body.team2}', ${req.body.status})`;

  connection.query(query, (error, result) => {
    if(error) throw error;
    res.json({code: 200, response: result});
  });
});

module.exports = router;

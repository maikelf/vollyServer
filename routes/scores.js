var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = require('../config/db');
var connection = mysql.createConnection(db);

// get scores
router.get('/', function(req, res, next) {
  var query = "SELECT * FROM score";

  connection.query(query, (error, result) => {
    if(error) throw error;
    res.json({code: 200, response: result});
  });
});

// set new score
router.post('/', function(req, res, next){
  var query = `INSERT INTO score (id, partial, team1, team2) values (${req.body.id}, ${req.body.partial}, ${req.body.team1}, ${req.body.team2})`;

  connection.query(query, (error, result) => {
    if(error) throw error;
    res.json({code: 200, response: result});
  });
});

module.exports = router;

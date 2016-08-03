var express = require('express');
var client = require('./db/index');
var app = express();

app.get('/', function(req, res) {
	res.send(client());
});
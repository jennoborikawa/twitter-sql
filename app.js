var express = require('express');
var pg = require('pg');
var swig = require('swig');
var app = express();
var postgresUrl = 'postgres://localhost/twitterdb';
var client;

swig.setDefaults({ cache:false });

app.set('view engine', 'html');
app.engine('html', swig.renderFile);


app.get('/', function(req, res) {
	client = new pg.Client(postgresUrl);

	client.connect(function (err){
		if (err) throw err;

		client.query('SELECT * from tweets join users on tweets.id=users.id where users.id=$1', [7], function(err, results){
			if (err) throw err;

			var tweets = results.rows;
			res.render('index', { categories: tweets });
		});
	});
});

module.exports = app;
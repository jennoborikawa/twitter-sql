
module.export = function () {
	var pg = require('pg');

	var postgresUrl = 'postgres://localhost/twitterdb';
	var client = new pg.Client(postgresUrl);

	client.connect(function (err){
		if (err) throw err;

		client.query('SELECT * from tweets', function(err, results){
			if (err) throw err;
			console.log(results.rows);

			client.end(function(err){
				if (err) throw err;
			});
		});
	});
	return client;
};

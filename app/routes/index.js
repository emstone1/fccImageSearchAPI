'use strict';

var path = process.cwd();
var searchController = require(path + '/app/controllers/searchController.js');
var recentSearchesController = require(path + '/app/controllers/recentSearchesController.js');

module.exports = function(app) {

app.get('/favicon.ico', function(req, res) {
    res.send(200);
});

  
	app.route('/') //route home page
		.get(function(req, res) {
			res.sendFile(path + '/public/index.html');
		});


	app.get('/recentsearches', recentSearchesController)


	app.get('/*', searchController)


}
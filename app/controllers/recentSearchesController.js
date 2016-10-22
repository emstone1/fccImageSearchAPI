'use strict';

var Search = require('../models/searches.js');


function recentSearchesController(req, res) {
    Search.find({}, {
        '_id': 0,
        'term': 1
    }, {
        limit: 10,
        sort: {
            date: -1
        }
    }, function(err, results) {
        if (err) throw err;
        res.json(results);
    })
}

module.exports = recentSearchesController;
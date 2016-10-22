'use strict';

var Search = require('../models/searches.js');
var bingRequest = require('../models/bing.js');

function searchController(req, res){
  

var urlpath=req.path.slice(1)

var searched=new Search({
    term: urlpath
});

searched.save(function(err) {
  if (err) throw err;
});


(bingRequest(urlpath, req.query.offset, function(response){
    var _response = JSON.parse(response);
    res.json(_response)
}))
}


module.exports = searchController;
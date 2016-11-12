'use strict';

var request = require('request');
var qs = require('querystring');
var dotenv = require('dotenv');


var bingRequest = function (searchterm, offset, callback)
{request({
    url: 'https://api.cognitive.microsoft.com/bing/v5.0/images/search',
    qs: {
        q: searchterm,
        count: 10,
        offset: offset
    },
    method: 'GET',
    headers: {
        "Ocp-Apim-Subscription-Key": "c0e6a84afb6a4fa7956b4aac7f5a234f"
    }
}, function(error, response, body) {
    if (error) {
callback(error)
}
    else callback(body)
    
    
})
    
}


module.exports = bingRequest;

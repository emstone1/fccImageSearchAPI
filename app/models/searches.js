'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Search = new Schema({
    term: String,
    date: {
        type: Date,
        default: Date.now
    }

});





module.exports = mongoose.model('Search', Search);

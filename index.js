var express = require('express');
var app = express();
var lib = require('./lib');
var mongoose = require('mongoose');


lib
    .helpers
    .setupRoutes(app, lib)

mongoose.connect('mongodb://localhost:27017/thailand');
mongoose.connection.on('open', function () {
    console.log('Mongoose connected.');
});
mongoose.Promise = global.Promise;

app.listen(lib.config.port, () => {
    console.log('App API start');
});
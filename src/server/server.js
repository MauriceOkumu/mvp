var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = 3000;
var morgan = require('morgan');
var public = require('./client')

var server = express();
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static( 'public'));

server.listen(port, function(){
    console.log('we are now online');
});
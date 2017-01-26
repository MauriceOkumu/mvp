var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = 3000;
var morgan = require('morgan');
var pug = require('pug');

var server = express();
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.set('views',path.join(__dirname, '/views'))
server.set('view engine', 'pug');

server.use(express.static(path.join(__dirname, '/views')));
server.get('/', function(req, res){
  res.render('index')
})

server.listen(port, function(){
    console.log('we are now online');
});
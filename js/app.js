// added by Lizza on 10/03/2017

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 4000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen (port, function () {
  console.log('Listening on:' + port);
});

// socket.io
io.sockets.on('connection', function (socket) {
  console.log('new client connection');
});

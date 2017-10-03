var gameport = process.env.PORT || 4004;
var io = require('socket.io');
var express = require('express');
var uuid = require('uuid');
var verbose = false;
var app = express.createServer();

app.listen(gameport);
console.log('Listening on port ' + gameport);

module.export = server;

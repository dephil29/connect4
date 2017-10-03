var io = require('socket.io');
var express = require('express');
var uuid = require('uuid');
var verbose = false;
var gameport = process.env.PORT || 4004;
var app = express.createServer();

app.listen(gameport);
console.log('Listening on port ' + gameport);

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});
app.get('/*', function(req, res, next) {
  var file = req.params[0];
  if(verbose) console.log('\t :: Express :: file requested : ' + file);
  res.sendfile(__dirname + '/' + file);
});
var sio = io.listen(app);
sio.configure(function () {
  sio.set('log level', 0);
  sio.set('authorization', function(handshakeData, callback) {
    callback(null, true);
  });
});
sio.sockets.on('connection', function(client) {
  client.userid = uuid();
  client.emit('onconnected', {id: client.userid});
  console.log('\t socket.io:: player ' + client.userid + ' connected');
  client.on('disconnect', function(){
    console.log('\t socket.io:: client disconnected ' + client.userid);
  });
});



module.export = server;

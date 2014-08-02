#!/usr/bin/env node

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 16000});

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
    });
    ws.send('something');
});

wss.broadcast = function(data) 
{
    for(var i in this.clients)
        this.clients[i].send(data);
};


var a = require('child_process').spawn("sh");

a.stdout.on('data', function (data) {
  //console.log('stdout: ' + data);
});

console.log(process.env.IP);
console.log(process.env.PORT);


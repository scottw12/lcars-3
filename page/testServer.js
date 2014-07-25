#!/usr/bin/nodejs

var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(404);
    response.end();
});
server.listen(9100, function() {
});

wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  return true;
}

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      request.reject();
      return;
    }

    var connection = request.accept('echo-protocol', request.origin);
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log(message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }
        else if (message.type === 'binary') {
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function(reasonCode, description) {
    });
});
EOF





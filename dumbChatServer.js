var WebSocket = require('ws');

var wss = new WebSocket.Server({port: 16001});

wss.on('connection', function(ws) {
    ws.on('message', function(message) 
    {
        console.log(message)
        //pipe messages into data; return messages to all clients
        wss.broadcast(message);
    });
});


wss.broadcast = function(data) {
    for(var i in this.clients)
        this.clients[i].send(data);
};

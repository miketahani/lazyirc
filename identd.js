// fake an ident server
// will need to turn on port forwarding on your router
var net   = require('net');
var host  = '127.0.0.1',
    port  = 113,
    // FIXME not sure what goes here
    ident = '???';

net.createServer(function (socket) {
    var socketAddress = socket.remoteAddress + ':' + socket.remotePort;
    console.log('[*] connection from ' + socketAddress);
    
    socket.on('data', function (data) {
        console.log('[*] received data: ' + sock.remoteAddress + ': ' + data);
        socket.write(data + ' : USERID : UNIX : ' + ident + '\n');
    });
    
    sock.on('close', function(data) {
        console.log('[*] disconnected: ' + socketAddress);
    });
    
}).listen(port, host);

console.log('[*] started server');

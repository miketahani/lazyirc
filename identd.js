// fake an ident server
// will need to turn on port forwarding on your router and run this as root to open up the port
var net   = require('net');
var host  = '127.0.0.1',
    port  = 113,
    // FIXME not sure what goes here
    ident = '???';

net.createServer(function (socket) {
  socket.setEncoding('utf-8');
  var socketAddress = socket.remoteAddress + ':' + socket.remotePort;
  console.log('[*] connection from ' + socketAddress);
  
  socket.on('data', function (data) {
    data = data.replace(/\r|\n/g, '');
    console.log('[*] received data: ' + socketAddress + ': ' + data);
    socket.write(data + ' : USERID : UNIX : ' + ident + '\n', 'utf-8', function () {
      ;
    });
  });
    
  socket.on('close', function(data) {
    console.log('[*] disconnected: ' + socketAddress);
  });
    
}).listen(port, host);

console.log('[*] started server');

var http = require('http');
var app = require('./app');

var port = process.env.port || 3000;

var server = new http.createServer(app);

server.listen(port, function(){
    console.log('server running on port: '+ port);
});
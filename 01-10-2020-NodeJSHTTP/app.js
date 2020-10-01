//http is a node core module
/*const http = require('http');
const server=http.createServer();
server.on('connection',function (socket) {
    console.log(socket);
})
//if we do not provide the port number by default the port is 8080
server.listen(3000);
console.log('node server started on port 3000');*/

/*******************************/
//http is a node core module
const http = require('http');
const server=http.createServer(((req, res) => {
        console.log(req.url);
        console.log(req.headers);
        console.log(req.method);

    })

);
server.listen(3000);
console.log('server started on port 3000');

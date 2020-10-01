const http = require('http');
const server = http.createServer((req,res)=>{

    res.setHeader('content-type','text/html');
    res.write('<html>' +
        '<head><title>Sample Page</title></head><body><p>Testing HTTP Node JS</p></p></body></html>');
    res.end();

});

server.listen(5000,function (){
    console.log('Server Started');
});
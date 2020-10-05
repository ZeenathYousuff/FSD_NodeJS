const http = require('http');
const customers=[
    {id:1,name:'John'},
    {id:2,name:'Marry'},
    {id:3,name:'Jane'},
];

const server = http.createServer(function (req,res){
    let url = req.url;
    if(url === '/'){
       res.write('<h1>Home Page</h1>h1>');
       res.end();
    }
    else if(url === '/api/customers'){
        res.write(JSON.stringify(customers));
        res.end();
    }
    else{
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Not Found</h1>h1>');
        res.end();
    }
});
const port = 3000;
server.listen(port,()=> console.log(`Listening to port ${port}`));

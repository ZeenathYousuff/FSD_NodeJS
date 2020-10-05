//const http=require('http');
const express = require('express');
const app=express();

/*app.use('/', (req, res, next) => {
    console.log('Always Executes.!');
    next();
});*/
app.use('/products',(req, res, next) => {
    res.send('<h2>The Products Page</h2>');
})
app.use('/add-product', (req, res, next) => {
    console.log('In add-product middleware!');
    res.send('<h2>The Add Product Page.</h2>');
});
app.use('/',function (req,res,next) {

    res.send('<h2>Hello Node JS.</h2>');

});
//const server = http.createServer(app);
//server.listen(3000);
app.listen(3000);
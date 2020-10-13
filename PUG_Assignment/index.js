const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userData = require('./routes/user');
const nameRoutes = require('./routes/name');;
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views','views');
app.use('/', nameRoutes.routes);
app.use('/user',userData);
app.use((req, res, next) => {
    res.render('404',{pageTitle: 'error'});
});

app.listen(5000);
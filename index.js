const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userData = require('./routes/user');
const nameRoutes = require('./routes/name');;
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views','views');
app.use('/', nameRoutes);
app.use('/user',userData);
const errorController = require('./Controllers/error');
/*app.use((req, res, next) => {
    res.render('404',{pageTitle: 'error'});
});*/

app.use(errorController.get404);
app.listen(5000);
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.set('view engine', 'pug');
app.set('views','subviews');

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render('error',{pageTitle: 'error page'});
});
const port=process.env.PORT || 3000
app.listen(port,() => {
    console.log(`listening on http://localhost:${port}`);
});

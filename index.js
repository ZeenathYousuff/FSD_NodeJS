const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'))
const adminRoutes = require('./routes/admin');
const publicRoutes = require('./routes/public');
const displayRoutes = require('./routes/display');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin',adminRoutes);
app.use('/all',displayRoutes);
app.use(publicRoutes);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});
app.listen(3001);
const path = require('path');
const adminData = require('../routes/user');
const express = require('express');
//const rootDir = require('../util/path');
const router = express.Router();
const names=[];


router.get('/', (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('name',{pageTitle:"Add Name"})
});

router.post('/', (req, res, next) => {
    names.push({username:req.body.username})
    res.redirect('/user/print-name');
});

module.exports.routes = router;
module.exports.names = names;

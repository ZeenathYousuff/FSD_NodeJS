const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const products=[];
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product',{pageTitle:'add-product',link:'/admin/add-product'})//added link for activating anchor tag in pug file
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({title:req.body.title})
  res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;

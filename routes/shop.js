const path = require('path');
const adminData = require('../routes/admin');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products=adminData.products;
  res.render('shop',{prods:products,pageTitle:'shop',link:'/'})//added link for activating anchor tag in pug file
});

module.exports = router;

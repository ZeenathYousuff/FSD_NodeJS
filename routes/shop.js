const path = require('path');
const adminRoutes=require('../routes/admin')
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js',adminRoutes.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;

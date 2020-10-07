const express = require('express');
const path=require('path');
const router = express.Router();
let rootDir = require('../util/path');

router.get('/', (req, res, next) => {
   // res.sendFile(path.join(__dirname, '../','views','shop.html'));
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
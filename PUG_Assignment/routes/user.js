const path = require('path');
const express = require('express');
//const rootDir = require('../util/path');
const router = express.Router();
const nameData = require('../routes/name');

router.get('/print-name', (req, res, next) => {
    const names=nameData.names;
    res.render('user',{names:names,pageTitle:'Display Name'})
});

module.exports = router;


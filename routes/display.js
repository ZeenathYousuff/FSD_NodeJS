const path = require('path');
const express = require('express');
let rootDir = require('../util/path');
const router = express.Router();

router.get('/display', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'display.html'));
});

module.exports = router;
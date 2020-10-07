const path = require('path');
const express = require('express');
let rootDir = require('../util/path');
const router = express.Router();

router.get('/add-todo', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-todo.html'));
});

router.post('/add-todo', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
const path = require('path');

const express = require('express');


const router = express.Router();

router.get('/home', (req, res, next) => {
    const products = adminData.products;
    res.render('home', {pageTitle: 'Home Page', path: '/home'})
});

module.exports = router;
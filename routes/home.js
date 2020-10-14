/*const path = require('path');
const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('home', {pageTitle: 'Home Page', path: '/home'})
});
module.exports = router;*/

const path = require('path');
const express = require('express');
const router = express.Router();
const productsController=require('../controllers/products');
router.get('/',productsController.getHome);
module.exports=router;
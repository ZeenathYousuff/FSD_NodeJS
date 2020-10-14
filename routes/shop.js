const path = require('path');
const express = require('express');
const app=express();
const router = express.Router();
const productsController=require('../controllers/products');
router.get('/',productsController.getProducts);
module.exports=router;

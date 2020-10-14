
/*****************************************************************/
//Without Model
/*const products = [];
exports.getAddProduct=(req, res)=>
{
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
}
exports.postAddProduct = (req, res) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};
exports.getProducts = (req, res) => {
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
};

exports.getHome = (req, res) => {
    res.render('home', {pageTitle: 'Home', path: '/'});
};*/
/***************************************************************/

/*************************************************************/
//With model--> product.js

const Product = require('../models/product');
exports.getAddProduct=(req, res)=>
{
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
}
exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};
exports.getProducts = (req, res) => {
    const products = Product.fetchAll();
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
};

exports.getHome = (req, res) => {
    res.render('home', {pageTitle: 'Home', path: '/'});
};

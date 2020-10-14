const products = [];
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
};
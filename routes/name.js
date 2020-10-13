const path = require('path');
const adminData = require('../routes/user');
const express = require('express');
const Joi = require('joi');
//const rootDir = require('../util/path');
const router = express.Router();
const names=[];


router.get('/', (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('name',{pageTitle:"Add Name"})
});

router.post('/', (req, res, next) => {
    const { error } = validateName(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    names.push({username:req.body.username})
    res.redirect('/user/print-name');
});

function validateName(username) {
    console.log(username);
    const schema = {
        username: Joi.string().min(5).required()
    };
    return Joi.validate(username, schema);
}

module.exports.routes = router;
module.exports.names = names;

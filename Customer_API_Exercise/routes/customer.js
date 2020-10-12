const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50,

    },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));

//GET: Get all customers
router.get('/',async (req, res) => {
    let result = await Customer.find();
    res.send(result);
});

//GET: Get customer by id
router.get('/:id',async (req, res) => {
    let id=req.params.id;
    let result = await Customer.findById(id);
    res.send(result);
});

//GET: Get customer by name
router.get('/name/:name',async (req, res) => {
    let name=req.params.name;
    let result = await Customer.find({name:name});
    res.send(result);
});

//GET: Get customer by phoneNumber
router.get('/phone/:phone',async (req, res) => {
    let phone=req.params.phone;
    let result = await Customer.find({phone:phone});
    res.send(result);
});

//GET: Get customer by isGold
router.get('/gold/:isGold',async (req, res) => {
    let gold=req.params.isGold;
    let result = await Customer.find({isGold:gold});
    res.send(result);
});

//PUT : Update customer by id
router.put('/:id', async (req, res) => {
    const customer = await Customer.findOneAndUpdate(req.params.id, {name: req.body.name},{new:true});
    if ((!customer)) {
        return customer.status(404).send('The customer with the given ID was not found.');
    }
    res.send(customer);
});

//PUT : Update customer by name
router.put('/name/:name', async (req, res) => {
    const customer = await Customer.updateMany({name:req.params.name}, {$set:{phone: req.body.phone}},{new:true});
    if ((!customer)) {
        return customer.status(404).send('The customer with the given name was not found.');
    }
    res.send(customer);
});

//PUT : Update customer by isGold
router.put('/gold/:isGold', async (req, res) => {
    const customer = await Customer.updateMany({isGold:req.params.isGold}, {$set:{name: req.body.name,phone: req.body.phone},},{new:true});
    if ((!customer)) {
        return customer.status(404).send('The customer with the given condition was not found.');
    }
    res.send(customer);
});


//POST : create a new customer
router.post('/', async (req, res) => {
    /*
       const { error } = validateCustomer(req.body);
        if (error) return res.status(400).send(error.details[0].message);
    */

    let customer = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    });
    customer = await customer.save().then(function (){
        console.log("Customer saved");
        res.send(customer);
    }).catch(reason => {
        console.log('validation error',reason.message);
        res.status(400).send(reason.message);
    })


});

//DELETE : remove customer by id
router.delete('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id);
    if (!customer) return res.status(404).send('The customer with the given ID was not found.');
    res.send(customer);
});

//DELETE : remove customer by name
router.delete('/name/:name', async (req, res) => {
    const customer = await Customer.deleteMany({name:req.params.name});
    if (!customer) return res.status(404).send('The customer with the given name was not found.');
    res.send(customer);
});

//DELETE : remove customer by phone number
router.delete('/phone/:phone', async (req, res) => {
    const customer = await Customer.deleteMany({phone:req.params.phone});
    if (!customer) return res.status(404).send('The customer with the given name was not found.');
    res.send(customer);
});


/*
function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean()
    };
    return Joi.validate(customer, schema);
}
*/


module.exports = router;

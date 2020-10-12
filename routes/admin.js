const {ToDo, validate} = require('../models/to-do');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//const path = require('path');
//let rootDir = require('../util/path');


router.get('/add-todo', async (req, res, next) => {
   // res.sendFile(path.join(rootDir, 'views', 'add-todo.html'));
    const todos = await ToDo.find();
    res.send(todos);
});

router.post('/add-todo', async (req, res, next) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let todo = new ToDo({
        toDoName: req.body.toDoName,
        isCompleted: req.body.isCompleted
    });
    todo = await todo.save();

    res.send(todo);

    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
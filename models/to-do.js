const Joi = require('joi');
const mongoose = require('mongoose');

const ToDo=mongoose.model('to-do',new mongoose.Schema({
   toDoName: {
        type: String,
        required:true,
        enum:['Requirement','Analysis','Design','Test','Deploy'],
    },
    isCompleted:{type:Boolean, default:false}

}));
function validateToDo(todo) {
    const schema = {
        toDoName: Joi.string().required(),
        isCompleted: Joi.boolean()
    };

    return Joi.validate(todo, schema);
}

module.exports.ToDo=ToDo;
module.exports.validate=validateToDo;
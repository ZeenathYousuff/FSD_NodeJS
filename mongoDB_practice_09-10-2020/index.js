const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground', {useNewUrlParser: true, useUnifiedTopology: true});

//By importing the js file in the mongoose DB and accesing it here
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    return Course
        .find({isPublished: true})
        //.and([{tags: 'backend'},{tags: 'frontend'}])
        .sort('-price')
        .or({ name: { $regex: /by/ }},
            {price : {$gte : 15}},
            {author : {$regex :  /^M/}})
        .select('name author price tags isPublished');
}

async function run() {
    const courses = await getCourses();
    console.log(courses);
}

run();

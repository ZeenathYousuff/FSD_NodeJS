const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground', {useNewUrlParser: true, useUnifiedTopology: true});


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
        .and([{tags: 'backend'}])
        .sort('-price')
        .where('price').gte(15)
        .or({ name: { $regex: /.js/ } })
.select('name author price tags isPublished');
}

async function run() {
    const courses = await getCourses();
    console.log(courses);
}

run();

const readline = require('readline');
const mongoose = require('mongoose');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//step-1
// connect with db
mongoose.connect('mongodb://localhost/play-ground', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(function () {
}).catch(reason => {
    console.log('error connecting.');
});

//step-2
//create schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now()},
    isPublished: Boolean,
    price: Number
});


const Course = mongoose.model('Course', courseSchema);
course = new Course();
let answers = [];
let tempTags = [];
let name = '';
let author = '';
let published = false;
let price='';

async function readData() {
    rl.question('name? author? tags? published?price? ', answer => {
        answers = answer.split(',');
        console.log(answers);
       // name = answers[0];
       // author = answers[1];
       // tempTags= answers[2].split(' ');
      //  published=answers[3]
      //  price=answers[4];
        course.set({name: answers[0]});
        course.set({author: answers[1]});
        course.set( {tags: answers[2].split(' ')});
        course.set( {isPublished: answers[3]});
        course.set({price: parseInt(answers[4])});
        course.save();
        rl.close();
    });
}


/*
readData().then(function (){
    console.log('successfully done');
}).catch(reason => {
    console.log('failed',reason.message);
});*/


async function findCourse(name,author,isPublished,price)
{
    //await Student.find({firstName:fname}).select('firstName').sort('firstName').then(function (result) {
    await Course.find({ 'isPublished':true}).select('name author price').sort('-price').where('price').gte(15).then(function (result) {
        console.log('Student founddddddd:',result);

    }).catch(error => {
        console.log('Error');
    });
}

async function getCourses()
{
    let result = await Course.find();
    console.log('displaying Courses',result);
    findCourse(result.name,result.author,result.isPublished,result.price).then(function(){
        console.log('called run function');
    }).catch(error => {
        console.log(error.message);
    })
}

async function run()
{
    getCourses().then(function(){
        console.log('called run function');
    }).catch(error => {
        console.log(error.message);
    })
}
run().then(function () {
    console.log('finished running');

}).catch(error => {
    console.log(error.message);

});
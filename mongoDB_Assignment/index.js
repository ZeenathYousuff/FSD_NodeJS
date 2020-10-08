const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground',{ useNewUrlParser: true , useUnifiedTopology: true} )
    .then(function(){
        console.log('Connected to Mongo');
    })
    .catch(reason => {
        console.log('Connection is not Unsuccessful..!',reason.message);
    })

const courseSchema=new mongoose.Schema(
    {
        name:String,
        author:String,
        tags:[String],
        date:{type: Date,default:Date.now()},
        isPublished:Boolean,
        price:Number
    });
const Course=mongoose.model('Course',courseSchema);
let course=new Course();

    course.set({
        name:"Computer Science",
        author:"Charles Babbage",
        tags:["computer","binary","secondary"],
        isPublished:true,
        price:250.00
    })


async function createCourse()
    {
        let result = await course.save();

        console.log(result);
    }

let i = 3;
do{

    createCourse().then(function (){
        console.log('Course is created: ');

    }).catch(error => {
        console.log('Error creating student:',error.message);
    });i--;
}while (i>0)


async function getCourse()
{
    let result = await Course.find();
    console.log('displaying Courses',result);

}

async function run()
{
    getCourse().then(function(){
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

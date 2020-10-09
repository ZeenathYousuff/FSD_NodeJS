const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected successfully');
});
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
});
const Course = mongoose.model('Course', courseSchema);

//findFirst And Update
/*
const course=new Course({
    name:'Spring',
    author: 'Jane',
    tags: ['Spring','Middleware'],
    isPublished:true,
    price:34
});

async function createCourse()
{
    const result = await course.save();
    console.log('Course created');
}*/

/****************Find By Id**********************/
/*
async function updateCourse(id)
{

    const course = await Course.findById(id);
    console.log(course);
    if (!course) return;
    course.set({ name: 'Learning React',author: 'Mosh',_v: 2});
    course.save();
    console.log(course);


}

updateCourse('5f7ff2408dae152e60c91de8').then(()=>{
    console.log('course update success');
});*/
/*******************************************************/

/**********************Find by matching condition*********************************/

//update first
/*async function updateCourse()
{
    const result = await Course.update({ author: 'Mosh' }, {
        $set: { name: 'Learning Cricket'}


    });
    console.log('course update success');
}

updateCourse().then(() =>{
    console.log('success');
} );*/


//update All
async function updateCourse()
{
    const result = await Course.updateMany({ author: 'Mosh' }, {
        $set: { name: 'Learning Cricket'}
    });
    console.log('course update success');
}

updateCourse().then(() =>{
    console.log('success');
} );

/******************************************************/
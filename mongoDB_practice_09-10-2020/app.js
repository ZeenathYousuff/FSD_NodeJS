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

/**************Find first and then update(using options:new)*************/

//find first and update
async function updateCourse(id)
{
    let course = await Course.findOneAndUpdate({_id: id}, {
        $set: {name: 'Learning Angular', author: 'SP.Balagurus'}
    },{new:true});
    console.log(course);
}

updateCourse('5f7ff2408dae152e60c91de2').then(() => {
    console.log('success');
})

/***************find and Delete************/
async function removeCourse()
{
    /*  const course =Course.deleteOne({_id : id},() => {
          console.log('delete course success',course);
      });*/
    /*  const course = await Course.findByIdAndRemove( {_id:id})
      {
          console.log(course);
      }
  */
    const result = await Course.deleteMany({author:'Mary'});
    console.log(result);
}
removeCourse().then(() =>{
    console.log('success');
} );

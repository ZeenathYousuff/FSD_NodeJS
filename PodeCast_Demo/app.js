const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected successfully');
});

const podcastSchema = new mongoose.Schema({
    name: String,
    age: Number,
    status:String,
    groups: [String],
});
const Podcast = mongoose.model('Podcast', podcastSchema);

const podcast=new Podcast();
let answers = [];
var i = 3;

////***************Create podcast***********************/////
async function readData() {
    rl.question('name? age? status? groups? ', answer => {
        answers = answer.split(',');
        console.log(answers);
        podcast.set({name: answers[0]});
        podcast.set({age: answers[1]});
        podcast.set( {status: answers[2]});
        podcast.set( {groups: answers[3].split(' ')});
        podcast.save();
        rl.close();
    });
}
/*
do{
    readData().then(function (){
        console.log('successfully done');
    }).catch(reason => {
        console.log('failed',reason.message);
    });
    i--;
}while (i>0)*/

//////*******************************************////////


//////***********GET all podcasts******************///////////
async function getPodcasts()
{
    let result = await Podcast.find();
    console.log('displaying Podcasts',result);

}

async function run()
{
    getPodcasts().then(function(){
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
//////////////*********************************//////////

////**************Find By Id*************************////////////
async function findPodcastByID(id)
{
    await Podcast.findById(id).then(function (result) {
        console.log('Podcast found with ID:',result);

    }).catch(error => {
        console.log('Error finding with this ID: ',id);
    });
}

findPodcastByID('5f802ae456a6413f60972030').then(()=>{
    console.log('finished finding podcast by id')

}).catch(reason => {
    console.log('Error with finding by id')
});

///////////***********************************/////////////

/****************Find By Name********************************/

async function findPodcastByName(name)
{

    await Podcast.find({name:name}).then(function (result) {
        console.log('Podcast founddddddd by name:',result);

    }).catch(error => {
        console.log('Error finding  by Name: ',name);
    });
}

findPodcastByName('Tim').then(()=>{
    console.log(`finished finding by name`)

}).catch(reason => {
    console.log('Error with finding by name')
});

/******************************************************/

/***********************Find By Age**************/

async function findPodcastByAge(age)
{
    await Podcast.find({age:age}).then(function (result) {
        console.log('Podcast founddddddd with age:',result);

    }).catch(error => {
        console.log('Error finding  with Age: ',name);
    });
}

findPodcastByAge(22).then(()=>{
    console.log(`finished finding by age`)

}).catch(reason => {
    console.log('Error with finding by age')
});

/*************************************************/

/***************Find by Status***************/

async function findPodcastByStatus(status)
{
    await Podcast.find({status:status}).then(function (result) {
        console.log('Podcast founddddddd with status:',result);

    }).catch(error => {
        console.log('Error finding  with Status: ',name);
    });
}

findPodcastByStatus("Allowed").then(()=>{
    console.log(`finished finding by Status`)

}).catch(reason => {
    console.log('Error with finding by Status')
});

/************************************************/

/************************Find By Group***************/

async function findPodcastByGroup(group)
{
    await Podcast.find({groups: group}).then(function (result) {
        console.log('Podcast found with group:',result);

    }).catch(error => {
        console.log('Error finding  with group: ',name);
    });
}

findPodcastByGroup('Politics').then(()=>{
    console.log(`finished finding by group`)

}).catch(reason => {
    console.log('Error with finding by group')
});


/****************************************************/

/***********************Update By ID **********************/
async function updatePodcastById(id)
{

    const podcast = await Podcast.findById(id);
    console.log(podcast);
    if (!podcast) return;
    podcast.set({ name: 'Doughlas',age: '15'});
    podcast.save();
    console.log(podcast);


}

updatePodcastById('5f802bd644521d2460c587a3').then(()=>{
    console.log('course update success');
});

/************************************************************/

/*****************Update Many Podcast*********************/
async function updatePodcast()
{
    const result = await Podcast.updateMany({ age: 25 }, {
        $set: { status: 'Allowed'}
    });
    console.log('course update success');
}

updatePodcast().then(() =>{
    console.log('success');
} );

/********************************************************/

/*********************Find By Id and remove************/
async function removePodcastById(id)
{
    const podcast = await Podcast.findByIdAndRemove( {_id:id})
    {
        console.log(podcast);
    }
}

removePodcastById('5f802b3296fa1816acc6dade').then(()=>{
    console.log('Delete success');
})


/***************************************************/

/*****************Find and Delete Many************************/
async function removePodcast()
{

    const result = await Podcast.deleteMany({status:'Not Allowed'});
    console.log(result);
}
removePodcast().then(() =>{
    console.log('success');
} );

/******************************************************/


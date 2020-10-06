const Joi = require('joi');
const express=require('express');
const app=express();
app.use(express.json());

let movies=[
    {id:1,type: 'Harry Potter',rating:3},
    {id:2,type: 'Home Alone',rating: 4},
    {id:3,type: 'Titanic',rating: 4}
];

app.get('/api/movies',(req,res)=>{
    res.send(movies);
});

//GET movies by id
app.get('/api/movies/:id', (req, res) => {
    let id=parseInt(req.params.id);
    const movie = movies.find(c => c.id === id);
    if (!movie)
        return res.status(404).send(`The movie with the ID ${id} was not found.`);

    // res.send(`the genere with ID ${id} found${genre}`);
    res.send(movie);
})

//GET movies by type
app.get('/api/movies/type/:type', (req, res) => {
    let type=req.params.type;
    const movie = movies.find(c => c.type === type);
    if (!movie)
        return res.status(404).send(`The movie with the type ${type} was not found.`);

    // res.send(`the genere with ID ${id} found${genre}`);
    res.send(movie);
})

//GET movies by rating
app.get('/api/movies/rating/:rating', (req, res) => {
    let rating=parseInt(req.params.rating);
    const movie = movies.filter(c => c.rating >= rating);
    if (!movie)
        return res.status(404).send(`The movie with the Rating ${rating} was not found.`);

    res.send(movie);
})

//POST movie
app.post('/api/movies', (req, res) => {
    const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const movie={
        id:movies.length+1,
        type:req.body.type,
        rating: req.body.rating
    };
    movies.push(movie);
    res.send(movie);

});

//PUT movie with id
app.put('/api/movies/:id',(req,res) => {
    let id=parseInt(req.params.id);
    const movie = movies.find(c=> c.id == id);

    if(!movie)
        return res.status(404).send(`The movie with the id ${id} was not found.`);

    const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    movie.type = req.body.type;
    movie.rating = req.body.rating;
    res.send(movie);
})

//DELETE movie
//DELETE GENRE
app.delete('/api/movies/:id', (req, res) => {
    const movie = movies.find(c => c.id === parseInt(req.params.id));
    if (!movie) {
        return res.status(404).send(`The movie with the id ${req.params.id} was not found.`);

    }
    const index=movies.indexOf(movie);
    movies.splice(index, 2);
    res.send(movie);
});


let port=process.env.PORT || 5000;
app.listen(port, function(){
    console.log('server started listening on port number',port);
});

function validateMovie(movie) {
    const schema = {
        type: Joi.string().min(5).required(),
        rating:Joi.number().min(1).max(5).required()
    };
    return Joi.validate(movie, schema);
}


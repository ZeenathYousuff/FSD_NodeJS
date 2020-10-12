const mongoose = require('mongoose');
const customers = require('./routes/customer');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/play-ground',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/customers', customers);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    res.send('this is server');
});

// Connect to Mongoose
//mongoose.connect('mongodb://localhost/tracker');
//const db = mongoose.connection;

app.get('/api/', (req, res) => {
    res.send('Please use /api/books or /api/genres');
});

app.post('/api/', (req, res) => {

});

app.put('/api/', (req, res) => {

});

app.delete('/api/', (req, res) => {

});

app.listen(port);
console.log('server is running on ' + port);
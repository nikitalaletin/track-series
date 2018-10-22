const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 4000;

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
    res.json({'GET request for /api/': true});
});

app.post('/api/', (req, res) => {
    res.json({'POST request': true});
});

app.put('/api/', (req, res) => {
    res.json({'PUT request': true});
});

app.delete('/api/', (req, res) => {
    res.json({'DELETE request': true});
});

app.listen(port);
console.log('server is running on ' + port);
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
const routes = require('./api/routes/route');

const port = process.env.PORT || 4000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use('/api', routes);

// Connect to Mongoose
//mongoose.connect('mongodb://localhost/tracker');
//const db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('this is server');
});

app.listen(port, () => {
    console.log('server is running on ' + port);
});
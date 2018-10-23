const TVDB = require('node-tvdb');
const secrets = require('./secret');
const tvdb = new TVDB(secrets.getTvDbSecret());

tvdb.getSeriesByName('The Simpsons')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
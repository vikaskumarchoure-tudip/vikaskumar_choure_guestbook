var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
// get an instance of router
var router = express.Router();

// bundle our routes
var authRoute = require('./routes/route');
var visitorsRoute = require('./routes/route');

mongoose.connect(config.database);
app.set('secret', config.secret);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.send('welcome to http://localhost:' + port);
});

// START THE SERVER
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server Running on Port http://localhost:' + port);

router.get('/myAPI', function (req, res) {
    res.json({message: 'Welcome to our First Express project!'});

});

/*

var mongoose = require('mongoose');

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./NodeJs/api');
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/myappdatabase');

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Get port from environment and store in Express.
 
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));

*/
// Dependencies
var express = require('express');
var exphs = require('express-handlebars');
var mongoose = require('mongoose');

// Set up port
var PORT = port.env.PORT || 3000;

// Express instance
var app = express();

// Require routes
var routes = require('./routes');

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public folder static
app.use(express.static('public'));

// Connect handlebars to Express app
app.engine('handlebars', exphs({ defaultLayout: 'main' }));

// Route all requests through my middleware
app.use(routes);

// Mongo deployment stuff
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to Mongo DB
mongoose.connect(MONGODB_URI);

// Listen to port
app.listen(function () {
    console.log('http://localhost:' + PORT);
});
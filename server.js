// require dependencies
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');

// initialize the express app
const app = express();

// configure settings
require('dotenv').config();
require('./config/database'); // this ensures that the database.js module runs

// mount middleware
app.use(express.json()); // creates req.body
app.use(morgan('dev'));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// "catch all route" - used to always serve index.html
app.get('/*',(req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// tell the app to listen
const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app is running on port:${port}`);
});
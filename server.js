const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connecting to the database
mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...');
        process.exit();
    });

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// route define
require('./app/routes/note.routes')(app);
require('./app/routes/auth.routes')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

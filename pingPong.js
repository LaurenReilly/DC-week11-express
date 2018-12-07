//require express from npm
const express = require('express');

//get an application instance with the app variable
const app = express();

//set a variable for our port
const port = 3000;

//use the get function to set a route
app.get('/ping', function(req, res) {
    res.send('PONG');
});

app.listen(port);
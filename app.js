// these two will initialise our server
var express = require('express');
var app = express();
var path = require('path'); // path sets up the url path as dynamic if you are deployed as the path will be different
var dataFile = require('./data.json'); // so we can use json file in this file, we call it dataFile

// console.log(dataFile.pencilcase.name);

// view engine set up
app.set('views', path.join(__dirname, 'views')); // setting up view engine to look in 'views' directory
app.set('view engine', 'ejs'); // using 'ejs' view engine here but could change to pug, etc



// root route
app.get('/', function (req, res) {
  res.render('index', { dataVariable: dataFile }); // render the index page view
}) // will pass in the data, making it equal to new variable dataVariable

// json route
app.get('/json', function (req, res) {
  res.json( dataFile); // send our dataFile to get json back 
})

// server listener
app.listen(3000, function () {
  console.log('Espressoff app listening on port 3000!')
})

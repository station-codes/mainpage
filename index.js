var express = require('express');
var app = express();

var work = require('../workpage/work.js');

// respond with "hello world" when a GET request is made to the homepage

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', {
    title:'hey title', 
    message:'station.codes stuff',
    text:'some text',
    footer:'the footer',
  });
});

app.listen(31898);

app.use('/work', work);

var express = require('express');
var app = express();

var work = require('./work.js');
var learn = require('./learn.js');
var teach = require('./teach.js');
var game = require('./game.js');

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', {
    title:'station.codes', 
    message:'station.codes stuff',
    text:'some text',
    worklink:'<a href="/work">work</a>',
    footer:'the footer',
  });
});

app.listen(31898);

app.use('/work', work);
app.use('/learn', learn);
app.use('/teach', teach);
app.use('/game', game);
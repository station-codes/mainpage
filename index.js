var express = require('express');
var app = express();

var work = require('./work.js');
var learn = require('./learn.js');
var teach = require('./teach.js');
var game = require('./game.js');
var sail = require('./sail');

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', {
    title:'station.codes', 
    message:"From 2008 to 2018 i worked as a software engineer for microcontrollers.\
             All the work i've done was in C. In all the projects there was never a\
             question about the programming language. In 2018 I buyed a pycom embedded\
             board that can be programmed in micropython. I got stuck by the\
             simplicity of python and started to read some books. In December 2018\
             i discovered advent of code and tried it with python.\
             On reddit i followed the discussions about which language is best\
             suited for the advent of code challenges. People with computer sciences\
             degree argued about functional programming, lambdas, tree sorting ...\
             I had no idea what they talked about, i wanted to know all about!\
             Luckly at my work i had a programm to work on in C++. I discovered that\
             C++ 98/11/17 were different and got the idea around the OOP paradigm.\
             I started attending meetups in Zurich about C++/Agile/GNU.\
             This page is the result after one year of private R&D around software\
             in the year 2019. I want to realise different projects with C++17, Databases,\
             nodejs, python. I will try to teach knowledge of C to friends.",
    text:'my metrics',
    footer:'last update 2019-08-01',
  });
});

app.listen(31898);

app.use('/work', work);
app.use('/learn', learn);
app.use('/teach', teach);
app.use('/game', game);
app.use('/sail', sail);
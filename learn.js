var express = require('express')
var router = express.Router()

// define the about route
router.get('/', function (req, res) {
  res.render('learn', {
    title:'learn', 
    message:'learn',
    footer:'update 2019-08-01',
  });
})

// define the about route
router.get('/python', function (req, res) {
  res.render('learn', {
    title:'learn/python', 
    message:'python',
    text:'it started with the advent of code 2018',
    footer:'update 2019-08-01',
  });
})

// define the about route
router.get('/nodejs', function (req, res) {
  res.render('learn', {
    title:'learn/nodejs', 
    message:'nodejs',
    text:'it started with this page',
    footer:'update 2019-08-01',
  });
})

// define the about route
router.get('/cpp', function (req, res) {
  res.render('learn', {
    title:'learn/cpp', 
    message:'cpp',
    text:'it started 2018 at my job',
    footer:'update 2019-08-01',
  });
})

module.exports = router



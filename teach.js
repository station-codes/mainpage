var express = require('express')
var router = express.Router()

// define the about route
router.get('/', function (req, res) {
  res.render('page', {
    title:'teach', 
    message:'teach'
  });
})

// define the about route
router.get('/about', function (req, res) {
  res.render('page', {
    title:'teach/about', 
    message:'teach about'
  });
})

module.exports = router



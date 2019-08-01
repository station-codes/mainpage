var express = require('express')
var router = express.Router()

// define the about route
router.get('/', function (req, res) {
  res.render('teach', {
    title:'teach', 
    message:'teach',
    footer:'update 2019-08-01',
  });
})

// define the about route
router.get('/c', function (req, res) {
  res.render('teach', {
    title:'teach/c', 
    message:'teach some c to students',
    footer:'update 2019-08-01',
  });
})


module.exports = router



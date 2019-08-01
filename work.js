var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the about route
router.get('/', function (req, res) {
  res.render('page', {
    title:'work', 
    message:'blub'
  });
})

// define the about route
router.get('/about', function (req, res) {
  res.render('page', {
    title:'work/about', 
    message:'copirights and so on...'
  });
})

module.exports = router



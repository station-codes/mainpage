var express = require('express')
var router = express.Router()

// middleware that is specific to this router
//router.use(function timeLog (req, res, next) {
//  console.log('Time: ', Date.now())
//  next()
//})

// define the about route
router.get('/', function (req, res) {
  res.render('work', {
    title:'work', 
    message:'work i have done as a software engeneer',
    text:'blub',
    footer:'update 2019-08-01',
  })
})

// define the about route
router.get('/about', function (req, res) {
  res.render('work', {
    title:'work/about', 
    message:'copirights and so on...'
  })
})

module.exports = router



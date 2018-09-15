var express = require('express');
var router = express.Router();
var Handlebars = require('handlebars');

Handlebars.registerPartial('header', '{{header}}')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Adrasamen' });
});

router.get('/Contribute', function(req, res, next){
  res.render('contribute', {title: 'Contribuez'})
})

router.get('/Contact', function(req, res, next){
  res.render('contact', {title: 'Contactez-nous'})
})

router.get('/Team', function(req, res, next){
  res.render('team', {title: 'La team'})
})

module.exports = router;

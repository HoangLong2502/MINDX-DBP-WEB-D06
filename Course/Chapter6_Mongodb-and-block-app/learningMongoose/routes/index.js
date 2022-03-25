var express = require('express');
const carModel = require('../model/car.model');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(carModel)
  res.send('API working')
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Hoang Long' });
});

// send là đẩy thẳng ra không dùng template engine nào cả
// render là đảy thông qua 1 temlate engine

module.exports = router;

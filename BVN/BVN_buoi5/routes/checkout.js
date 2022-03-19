var express = require('express');
const res = require('express/lib/response');
var router =express.Router();

router.post('/', function(req, res, next) {
    const { body } = req;
    console.log('content-body', body);
    res.render('checkout', { body })
})

module.exports = router;
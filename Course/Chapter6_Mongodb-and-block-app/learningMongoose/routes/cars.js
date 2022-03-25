var express = require('express');
const carModel = require('../model/car.model');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    const car = new carModel();
    car.name = req.body.name;
    car.manufacture = req.body.manufacture;
    car.price = req.body.price;

    car.save((err, car) => {
        if (err) {
            console.log('co loi')
            res.send('Loi insert data')
        }
        else {
            console.log('insert ca moi thanh cong', car)
            res.send(car)
        }
    })
});

router.get('/:id', function(req, res, next) {
    carModel.findOne({
        _id: req.params.id
    }).exec((err, car) => {
        if (err) {
            res.send(err)
        } else {
            res.send(car)
        }
    })
})

router.put('/:id', function(req, res, next) {
    carModel.findOneAndUpdate(
        { _id: req.params.id},
        { $set: {manufacture: req.body.manufacture}},
        { upsert: true},
        (err, car) => {
            if(err) {
                res.send('loi')
            } else {
                res.json(car)
            }
        }
    )
})
module.exports = router;
// const express = require('express');
// const app = express();

// app.get('/', function(req, res) {
//     res.send('Hello world with express');
// });

// app.listen(3001);

// localhost:3001

const jsonexport = require('jsonexport');

const contacts = [
    {
        name: 'Long',
        lastName: 'Hoang',
    },
    {
        name: 'Ha',
        lastName: 'Ngoc',
    },
    {
        name: 'Hieu',
        lastName: 'Khong',
    },
]

jsonexport(contacts, {rowDelimiter: '|'}, function(err, csv){
    if (err) return console.error(err);
    console.log('csv content:', csv);
});
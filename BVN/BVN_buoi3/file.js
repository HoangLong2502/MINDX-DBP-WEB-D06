let fs = require('fs');

// phương thức đọc file không đồng bộ
fs.readFile('first.txt', function(err, data) {
    if(err) {
        return console.error(err);
    }
    console.log('phương thức đọc file không đồng bộ: '+ data.toString());
})

fs.readFile('second.txt', function(err, data) {
    if(err) {
        return console.error(err);
    }
    console.log('phương thức bất đồng bộ: ' + data.toString());
})

// phương thức đọc file đồng bộ
let data1 = fs.readFileSync('first.txt');
let data2 = fs.readFileSync('second.txt');
console.log('Phương thức đọc file đỒng bộ: '+ data1.toString());
console.log('Phương thức đọc file đỒng bộ: '+ data2.toString());

fs.writeFile('./finish-sync.txt', data1 +' '+ data2, function(err,data) {
    if(err) throw err;
    console.log('write file successfully')
})
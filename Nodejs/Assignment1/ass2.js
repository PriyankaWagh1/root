var fs = require('fs');

var test = fs.readFileSync('test.txt', 'utf-8');

console.log(test);
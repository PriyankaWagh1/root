var sum = require('./operations/sum');
var subtraction = require('./operations/subtract');
var mult = require('./operations/multiplication');
var div = require('./operations/division');

var moment = require('moment');

const first= 3;
const second =7;

sum(first,second);
mult(first, second);

console.log('Today is: '+moment().format('dddd, MMMM Do YYYY, hh:mm:ss a'));
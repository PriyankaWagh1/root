var express = require('express');
var app = express();
var fs = require('fs');
var port= process.argv[2];
var file= process.argv[3]; 

app.get('/books-text', function (req, res) {
  var readFile = fs.readFileSync(file, 'utf8');
  var obj = JSON.parse(JSON.stringify(readFile));
  res.json(obj);
});

app.get('/books-json', function (req, res) {
    let data = fs.readFileSync('book.json');
    let books = JSON.parse(data);
    res.json(books);
});
  
app.listen(port);
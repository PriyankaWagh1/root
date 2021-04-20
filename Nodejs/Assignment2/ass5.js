var express = require('express');
var path= require('path');
var app = express();

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'./public')));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./public/form.html'));
});

app.post('/', function(req,res){
    res.send(req.body.name.split('').reverse().join(''));
});

app.listen(8000);
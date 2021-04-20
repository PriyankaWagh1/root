var express = require('express');
var path = require('path');
var app=express();

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'./public')));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'./public/index.html'));
});
app.listen(5000);
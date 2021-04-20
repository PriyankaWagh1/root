var express = require('express');

var app = express();
var port=process.env.PORT || 8080;

app.get('/', function(req,res){
    res.send('Hello World!');

});

app.get('/time', function(req,res){
    var date= new Date();
    var currentDate = date.toISOString();
    
    res.send(currentDate);
});

app.listen(port,function(){
    console.log('Express app listening on port: '+port);
});
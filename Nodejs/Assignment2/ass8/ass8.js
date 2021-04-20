var express = require('express');
var path = require('path');
var app = express();

app.use(express.urlencoded());

app.set('views',path.join(__dirname,'templates'));
app.set('view engine','pug');

app.get('/',function(req,res){
    res.render('index',{date:new Date().toDateString()});
});

app.listen(5000);
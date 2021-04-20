var express= require('express');
var app = express();

var date=new Date();
var currentYear=date.getFullYear();
//console.log(currentYear);

app.get('/year/:age', function(req,res){
    var birthYear= currentYear-req.params.age;
    res.send('You were born in '+ birthYear);

});

app.listen(3000,function(){
    console.log('Express app listening on port 3000');
});
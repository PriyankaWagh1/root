const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'./public')));

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/items', function(req, res){
    res.sendFile(path.join(__dirname,'./public/list.html'));
});

var price = [10,8,12,15,5,15,8,10];
var list = [];
app.post('/items', function(req, res){
    list = req.body.input;
    res.sendFile(path.join(__dirname, './public/list.html'));
});

app.get('/items/:id', function(req, res){
    var item = "Id- " + req.params.id + " : " + list[req.params.id] + "  Price: $" + price[req.params.id];
    res.send(item);
});

var update = "";
app.get('/items/update/:id', function(req, res){
    price[req.params.id] += 10;
    var updated = "Updated " + list[req.params.id] + " Price: $" + price[req.params.id];
    update = "id- " + req.params.id + " :- " + list[req.params.id] + " = $" + price[req.params.id];
    res.send(updated + "<br>" + update);
});

app.get('/items/delete/:id', function(req, res){
    var remain = "";
    var deleted = "Deleted " + list[req.params.id] + " = $" + price[req.params.id];
    list.splice(req.params.id, 1);
    price.splice(req.params.id, 1);
    for(let i = 0;i < list.length;i ++){
        remain += "id- " + i + " :- " + list[i] + " = $" + price[i] + "<br>";
    }
    res.send(deleted + "<br>" + remain);
});

app.listen(5001);
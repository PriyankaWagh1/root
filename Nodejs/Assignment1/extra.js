var fs= require('fs');
var file1='extra.txt';
var text= `it's long way to the top`;

fs.writeFile(file1, text , err =>{
    if(err){
        console.log(err);
        return
    }
});
console.log('The file was saved!');
fs.readFile('extra.txt','utf-8', function(err,file){
    if(err) throw err;
    console.log(file);
});



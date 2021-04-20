var fs = require('fs');


console.log('Reading File..');
fs.readFile('ex9.txt','utf-8',function(err,file){
    if(err){
        throw err;
    }
    console.log('Returning array..');
    var arr=file.split(" ");
    console.log(arr);
});
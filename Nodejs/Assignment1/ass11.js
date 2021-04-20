var fs = require('fs');

fs.readFile('ex9.txt','utf-8',(err,file)=>{
    if(err)
        console.log(err);
    console.log(file);
});

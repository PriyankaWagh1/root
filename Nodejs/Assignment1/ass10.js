var fs= require('fs');

fs.writeFile('ex10.txt', "Hey ho! Let's go", err =>{
    if(err){
        console.log(err);
        return
    }
});
console.log('The file was saved!');

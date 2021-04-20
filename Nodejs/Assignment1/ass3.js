const path = require('path');
const fs = require('fs');

const directory = "./";

fs.readdir(directory, function (err, files)  {
  if(err)
    console.log(err);

    files.forEach(function(file){
        if(fs.statSync(file).isDirectory())
            console.log("Directory: "+ file);
        else
            console.log("File: "+ file);
    })
});
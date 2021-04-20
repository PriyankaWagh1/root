var fs = require('fs');
var word = 'Node.js';

fs.readFile('search.txt','utf-8', function(err,file){
    if(err){
        console.log(err);
    }
    var arr = file.split(' ');
    var filteredWords=arr.filter(function(wordFile){
        return wordFile.includes(word);
    })

    console.log('The word "' + word + '" appears ' + filteredWords.length + " times in the text.")
});


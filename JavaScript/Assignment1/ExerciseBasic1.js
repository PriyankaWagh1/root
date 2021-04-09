console.log('E1');
console.log(Array.from({length:4},() => Math.floor(Math.random()*4)));
console.log(Array.from({length:4},() => Math.floor(Math.random()*4)));

console.log('E2');
console.log(Array.from({length:100},()=>Math.floor(Math.random()* 100)));

console.log('E3');
var strings= ['1.2', '2.3', '3.4', '4.5','5.6'];
var nums = Array(strings);
console.log(nums);
nums;

console.log('E4');
function longest_token(str){
    var token=str.split(/[ab|a]/);
    for(i=0;i<token.length;i++){
        if(token[i] == 'ab' || token[i] =='a')
            token.splice(i,1);
    }
    var len=0;
    var long;
    for(i=0;i<token.length;i++){
        if(token[i].length>len){
            len=token[i].length;
            long=token[i];
        }
    }
    console.log(long);
}
longest_token('abababbbb');
longest_token('ababcdababefgabahiab');
longest_token('abcdabguhiabababa');

console.log('E5');
function lengthOfNonWords(test){
    var count=0;
    var text=test;
    
     text.forEach(function(number){
         if('q'!=number.match(/(q)/g))
            count+=number.length
     });
     console.log(count);
}
var test1=['stop','quit','exit'];
lengthOfNonWords(test1);
var test2=['quit','quote','quick','start','stop'];
lengthOfNonWords(test2);
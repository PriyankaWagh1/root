//1
console.log("Hello, World!");

//2
/*var username=window.prompt("Enter your name: ");
if(username!='null'){
    alert('Hii '+ username);
}*/

//3
/*var username=prompt("Enter your name: ");
if(username=='Alice' || username=='Bob' || username=='alice' || username=='bob'){
    document.getElementById('welcome').innerHTML=`Hello ${username}! Welcome to JavaScript.`;
} */

//4
/*var num=parseInt(prompt("Enter a number: "));
var sum=0;
for(i=1;i<=num;i++){
    sum+=i;
}
document.write('Sum: ' +sum +'<br>');*/

//5
/*console.log("Multiple of 3 and 5");
function multiple(number){
    let sum=0;
    for(let i=3;i<=number;i++){
        if(i%3===0 || i%5===0){
            sum+=i;
        }
    }
    return sum;
}
console.log(multiple(17));*/

//6
/*var n=prompt("Enter a number:" );
var choice=prompt('Choose 1 for Product or 2 for Sum');
if(!isNaN(n)){
    if(choice==1){
        function factorial(x){
            if(x===0){
                return 1;
            }
            return x*factorial(x-1);
        }
        x=factorial(n);
        console.log('Product: '+x);
    }
    else if(choice==2){
        var x=(parseInt(n)+1*n)/2;
        console.log("Sum: "+x);
    }
    else{
        alert('Enter a valid number!');
    }
}*/

//7
/*console.log('Multiplication upto 12');
const num1=parseInt(prompt("Enter a number"));
for(i=1; i<=12; i++){
    var result=num1*i;
    console.log(`${num1} * ${i}= ${result}`);
}*/

//8
/*console.log("Prime Number");
var num2= parseInt(prompt("Enter lower number"));
var num3=parseInt(prompt("Enter largest number"));

console.log('The prime number are :');
for(i=num2; i<=num3; i++){
    var notPrime=false;
    for(j=2; j<=i; j++){
        if(i % j===0 && j!==i){
            notPrime=true;
        }
    }
    if(notPrime==false){
        console.log(i);
    }
}*/

//9
/*console.log("Guess the number");
function guess_number(){
    var y=Math.floor(Math.random()* 10);
    var guess=1;
    var x=document.getElementById("guessField").value;
    if(x==y){
        console.log("Congratulations! You guessed it right");
    }
    else if(x > y){
        guess++;
        console.log("You missed it! Try a smaller number");
    }
    else{
        guess++;
        console.log("You missed it! Try a greater number");
    }
}*/

//10
function leapYear(){
    var year=0;
    var currentYear=2021;
    res='';
    while(year<20){
        if((currentYear%4 === 0) && (currentYear%100 !== 0) || (currentYear % 400 === 0)){
            res+= currentYear+" ";
            year++;
            currentYear++;
        }else{
            currentYear++;
        }
    }
    document.getElementById('leap-years').innerHTML=res;
}

//11
console.log("Largest element in list");
function largest(array){
    console.log(Math.max(...array));
}
var array1=[2,3,5,7];
largest(array1);

//12
console.log("Reverse list");
var colors=['Orange','Yellow','Red','Blue','Pink'];
console.log(colors.reverse());

//13
function check(num, array){
    if(num===array){
        console.log("Number present in list");
    }else{
        console.log("Number not present in list");
    }
}
array2=[5,7,8,3,4,9];
check(2,array2);

//14
function odd(){
    list=[9,8,7,6,5,4,3,2,1];
    var odd_pos='';
    for( i= 0; i<list.length ;i++){
        if(i%2!=0){
            odd_pos+=list[i]+' ';
        }
    }
    document.getElementById('odd').innerHTML=odd_pos;
}

//15
function running_sum(){
    var array3=[2,4,6,8];
    var output=[];
    var sum=0;
    for(i=0; i<array3.length;i++){
        sum+= array3[i];
        output.push(sum);
    }
    document.getElementById('running_sum').innerHTML=output;
}

//16
/*console.log("Palindrome String");
var string1=prompt("Enter a string to check it is palindrome or not");
function checkPalindrome(str){
    const len=str.length;
    for(i=0; i<len/2; i++){
        if(str[i]!== str[len-1-i]){
            return ('It is not a palindrome');
        }
    }
    return 'It is palindrome';
}
var result=checkPalindrome(string1);
console.log(result);*/


//17
console.log('Sum using three function');
function for_loop(array){
    var sum=0;
    for(i=0;i<array.length;i++){
        sum+= array[i];
    }
    return sum;
}
function while_loop (array) {
    var sum1=0;
    var i=0;
    while(i<array.length){
        sum1+=array[i];
        i++;
    }
    return sum1;
}
var array_sum=function (array){
    if(array.length===1){
        return array[0];
    }
    else{
        return array.pop()+array_sum(array);
    }
};
array4=[1,2,3,4];
console.log(array_sum([1,2,3,4]));
console.log(while_loop(array4));
console.log(for_loop(array4));
    
//18
console.log('Perfect Square');
function on_all(){
    var perfect='';
    i=j=1;
    while(j<=20){
        root=Math.sqrt(i);
        if(root==Math.floor(root)){
            perfect+= i+ ' ';
            j++;
        }
        i++;
    }
    document.getElementById('perfect_square').innerHTML=perfect;
}

//19
function conCat(){
    var list1=['Banana','Orange','Mango'];
    var list2=['Purple','Yellow','Green'];
    var con=list1.concat(list2);
    document.getElementById('concat').innerHTML=con;
}

//20
console.log('Alternate element merge list');
    var list3=[1,2,3,4,5];
    var list4=['a','b','c','d','e'];
    var merge_result=list3.reduce(function(arr,v,i){
        return arr.concat(v,list4[i]);
    },[]);
    console.log(merge_result);

//21
console.log('Merging sorted list');
var array5=[5,7,4,1,2];
var array6=[9,3,8,0];
var sort_array=array5.concat(array6);
console.log(sort_array.sort());

//22
console.log('Rotate Array');
function rotateArray(){
    var k=3;
    var number1=[1,2,3,4,5,6];
    for(i=0; i<k ; i++){
        number1.unshift(number1.pop());
    }
    document.getElementById('rotate').innerHTML=number1;
}
//rotateArray(4);

//23
console.log("fibonacci numbers");
var fibonacci=function(n){
    if(n===1)
        return [0,1];
    else{
        var arr1=fibonacci(n-1);
        arr1.push(arr1[arr1.length-1]+arr1[arr1.length-2]);
        return arr1;
    }
}
console.log(fibonacci(100));

//24
console.log('List of digits');
function digit(num4){
    num_array=[];
    nums=num4.toString();

    for(var i=0,len=nums.length;i<len;i++){
        num_array.push(+nums.charAt(i));
    }
    return num_array;
}
console.log(digit(2347));

//25

//29
function printFrame(arr) {
    function fill (str, length, char) {
        return (str.length < length) ? fill(str + char, length, char) : str;
    }

    let size = arr.map((str) => {
            return str.length;
})
.reduce((a, b) => {
        return Math.max(a, b);
});

    let line = fill('', size + 4, '*');

    arr = arr.map((element) => {
            return '* '+ fill(element, size, ' ') + ' *';
})
    arr.unshift(line);
    arr.push(line);

    return arr.join('\n');;
}

console.log(printFrame(["Hello", "World", "in", "a", "frame"]));

//30

function translatePigLatin(str) {
    var newString = str + "way";
    
    if (/[qwrtypsdfghjklzxcvbnm]{1,}/i[Symbol.match](str[0])) {
    var firstConsonants = /[qwrtypsdfghjklzxcvbnm]{1,}/i[Symbol.match](str);
    var length = firstConsonants[0].length;
    var newStr = str.substr(length) + firstConsonants + "ay";
    return newStr; 
      
    }
    
    return newString;
  
}
  
console.log(translatePigLatin("Tiger"));
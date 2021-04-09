console.log('Exercise1')
function even_odd(){
    var number=document.getElementById('num').value;
    if(number=='' || number ==' ')
        document.getElementById('number').innerHTML= 'Please enter a number';
    else if(number % 2 ==0)
        document.getElementById('result').innerHTML="Number is even";
    else
        document.getElementById('result').innerHTML="Number is odd";
    
}

console.log('Exercise2')
function max(num1,num2,num3){
     var max_value=0;
     if(num1>num2)
        max_value=num1;
     else
         max_value=num2;
     if(num3>max_value)
         max_value=num3;
    return max_value;
}
console.log(max(1,2,3));
console.log(max(3,2,1));
console.log(max(1,3,2));


console.log('Exercise3')

function flipCoin(num){
    heads=0, tails=0;
    for(i=0;i<10;i++)
    {
        var x=(Math.floor(Math.random()*2)==0);
        if(x)
            heads++;
        else
            tails++;
    }
    return heads;
}
console.log(flipCoin(10));
console.log(flipCoin(10));
console.log(flipCoin(10));

console.log('Exercise4')
console.log(flipCoin(10)/10);
console.log(flipCoin(10)/10);

console.log('Exercise5')
function padChars(string1,num){
    var str='';
    while(num>0){
        str+=string1;
        num--;
    }
    console.log(str);
}

padChars('x',5);
padChars('*',10);
padChars('-',7);

console.log('Exercise6')

function roll_dice(){
    return 1 + Math.floor(Math.random()*6)
}

function rolls_to_getSix(){
    count=0;
    while(true){
        count++;
        if(roll_dice()==6)
            break;
    }
    return count;
}

console.log(rolls_to_getSix());

rolls_to_getSix();
rolls_to_getSix();

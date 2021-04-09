function isEven(num){
    return (num % 2 == 0);
}

function find(){
    for(i=0; i< arguments[0].length; i++){
        if(isEven(arguments[0][i]))
            return arguments[0][i];
    }
}

function exercise3(){
    var num=document.getElementById('input3').value;  
    document.getElementById('even').innerHTML="Even: " + isEven(num);
    document.getElementById('exercise3').innerHTML= "Result: " + find([1,3,4,5,6],isEven);
}
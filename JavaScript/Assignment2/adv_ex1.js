function isEven(num){
    return (num % 2 == 0);
}

function find(){
    if(arguments[0].length> 0 ){
        if(arguments[1](arguments[0][0])){
            return arguments[0][0];
        }
        return find(arguments[0].slice(1),arguments[1]);
    }

}

function adv_ex1(){
    var num=document.getElementById('input5').value;  
    document.getElementById('even1').innerHTML="Even: " + isEven(num);
    document.getElementById('advance1').innerHTML= "Result: " + find([1,3,4,5,6],isEven);
}
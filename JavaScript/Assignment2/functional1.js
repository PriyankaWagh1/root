function square(num){
    return num*num;
}
function double(num){
    return num*2;
}
function composedValue(){
    document.getElementById('exercise1').innerHTML=arguments[0](arguments[1](arguments[2]));

}

function exercise1(){
    var num=document.getElementById('input1').value;
    composedValue(square,double,num);
}

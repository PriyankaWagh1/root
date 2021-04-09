function square(num){
    return num*num;
}
function double(num){
    return num*2;
}
function compose(){
    arg1=arguments[0];
    arg2=arguments[1];

    return function(num){
        return arg1(arg2(num));
    }
}

function exercise2(){
    var f1=compose(square,double);
    var num=document.getElementById('input2').value;
    document.getElementById('func1').innerHTML="f1  " + f1(num);
    
    var f2=compose(double,square);
    document.getElementById('func2').innerHTML="f2 " + f2(num);
}

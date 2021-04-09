function square(num){
    return num*num;
}
function map(){
    array=[];
    for(i=0; i< arguments[0].length; i++){
        str=arguments[1](arguments[0][i]);
        array.push(str);
    }
    return array;
}

function exercise4(){
    document.getElementById('square_4').innerHTML='Sqaure: ' + map([1,2,3,4,5],square);
    document.getElementById('root_4').innerHTML='Square Root: ' + map([1,4,9,16,25],Math.sqrt);
}

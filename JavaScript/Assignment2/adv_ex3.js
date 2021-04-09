function demo(){
    return function(input){
        return input;
    }
}

var anonymous=demo();
function adv_ex3(){
    var input=document.getElementById('input6').value;
    document.getElementById('anonymous_func').innerHTML='\' ' + anonymous(input) + ' \'';
}
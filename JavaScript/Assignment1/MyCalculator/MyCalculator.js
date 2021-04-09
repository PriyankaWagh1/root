var input1=document.getElementById('input1').value;
var input2=document.getElementById('input2').value;

function mean(num1){
    var sum=0;
    var num3=num1.split(', ');
    num3.pop();
    for(i=0; i<num3.length;i++){
        sum+=parseFloat(num3[i]);
    }

    document.getElementById('result_box').innerHTML="Result : "+ sum/num3.length.toString();
}

function Operation(operator){
    num1=parseFloat(document.getElementById('num1'.value));
    switch(operator){
    case 'Add':
        num2= parseFloat(document.getElementById('num2').value);
        document.getElementById('result_box').innerHTML="Result : "+(num1 + num2).toString();
        break;
    case 'Sub':
        num2= parseFloat(document.getElementById('num2').value);
        document.getElementById('result_box').innerHTML="Result : "+(num2 - num1).toString();
        break;
    case 'Mul':
        num2= parseFloat(document.getElementById('num2').value);
        document.getElementById('result_box').innerHTML="Result : "+(num1 * num2).toString();
        break;
    case 'Div':
        num2= parseFloat(document.getElementById('num2').value);
        document.getElementById('result_box').innerHTML="Result : "+(num2 / num1).toString();
        break;
    case 'Exp':
        num2= parseFloat(document.getElementById('num2').value);
        document.getElementById('result_box').innerHTML="Result : "+ Math.pow(num1,num2).toString();
        break;
    case 'Mean':
        num1=document.getElementById('num1').value;
        mean(num1);
        break;
    }
}

function Calculator(){
    if(document.getElementById('add').checked){
        Operation('Add');
    }
    if(document.getElementById('sub').checked){
        Operation('Sub');
    }
    if(document.getElementById('multiply').checked){
        Operation('Mul');
    }
    if(document.getElementById('divide').checked){
        Operation('Div');
    }
    if(document.getElementById('exponent').checked){
        Operation('Expo');
    }
    if(document.getElementById('mean').checked){
        Operation('Mean');
    }
}
function calculate(){
    document.getElementById('input1').style.display = 'inline';
    document.getElementById('input2').style.display = 'inline';
    document.getElementById('result_box').style.display = 'block';
    document.getElementById('input1').innerHTML = "<input type='text' id='num1' placeholder='Input1'>";
    document.getElementById('input2').innerHTML = "<input type='text' id='num2' placeholder='Input2'>";
}
function cmean(){
    document.getElementById('input1').style.display = 'inline';
    document.getElementById('input2').style.display = 'none';
    document.getElementById('result_box').style.display = 'block';
    document.getElementById('input1').innerHTML = "<input type='text' id='num1' placeholder='Input1'>";
}
function quit(){
    document.getElementById('input1').style.display = 'none';
    document.getElementById('input2').style.display = 'none';
    document.getElementById('result').style.color = 'transparent';
    document.getElementById('quit').checked = false;
}
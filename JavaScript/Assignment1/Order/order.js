function validation() {
    Name = document.getElementById('name').value
    Email = document.getElementById('email').value
    Address = document.getElementById('address').value

    Delivery = ""
    if(document.getElementById("delivery").checked){
        Delivery = document.getElementById("delivery").value
    }
    if(document.getElementById("pickup").checked){
        Delivery = document.getElementById("pickup").value
    }

    Tip = document.getElementById('tip').value

    if(Name == null|| Name == "") {
        window.alert("Enter the Name");
        return false;
    }
    if(Email == null|| Email == "") {
        window.alert("Enter the Email");
        return false;
    }  
    if( Delivery == null|| Delivery== "") {
        window.alert("Choose Delivery type");
        return false;
    }
    if(Tip == 'Select') {
        window.alert("Enter the tip");
        return false;
    }

    Toppings = []
    if(document.getElementById("extra_cheese").checked){
        Toppings.push(document.getElementById("extra_cheese").value)
    }
    if(document.getElementById("pepperoni").checked){
        Toppings.push(document.getElementById("pepperoni").value)
    }
    if(document.getElementById("olives").checked){
        Toppings.push(document.getElementById("olives").value)
    }
    if(document.getElementById("pepper").checked){
        Toppings.push(document.getElementById("pepper").value)
    }
    if(document.getElementById("bacon").checked){
        Toppings.push(document.getElementById("bacon").value)
    }
    if(document.getElementById("tomatoes").checked){
        Toppings.push(document.getElementById("tomatoes").value)
    }
    if(document.getElementById("mashrooms").checked){
        Toppings.push(document.getElementById("mashrooms").value)
    }

    return true;
}

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];

var n = 1;
var x = 0;

function summary(){
    var AddRow = document.getElementById('table')
    var NewRow = AddRow.insertRow(n)
    var delfee = 0

    list1[x] = Name
    list2[x] = Email
    list3[x] = Address
    list4[x] = Toppings
    list5[x] = Delivery
    list6[x] = Tip

    if(Delivery == 'Yes')
        delfee = 5
    
    list7[x] = (10 + 1.5*Toppings.length + delfee) * (1 + parseFloat(Tip))
    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
    var cel6 = NewRow.insertCell(5);
    var cel7 = NewRow.insertCell(6);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];
    cel6.innerHTML = list6[x]*100 + "%";
    cel7.innerHTML = "$" + list7[x];

    n++;
    x++;
}

function Help(){
    var ele = document.activeElement.type
    if(ele == 'text')
        document.getElementById('help').innerHTML = 'This INPUT Field requires name of the person who orders pizza.'
    if(ele == 'email')
        document.getElementById('help').innerHTML = 'This INPUT Field requires email of the person who orders pizza.'
    if(ele == 'checkbox')
        document.getElementById('help').innerHTML = 'This CHECKBOX requires to select toppings for pizza.'
    if(ele == 'radio')
        document.getElementById('help').innerHTML = 'This RADIO button is requires to select delivery type.'
    if(ele == 'select-one')
        document.getElementById('help').innerHTML = 'This SELECT (DROPDOWN) is to select tip.'
    if(ele == 'textarea')
        document.getElementById('help').innerHTML = 'This TEXTAREA requires the address of the pizza delivery.'
    if(ele == null)
        document.getElementById('help').innerHTML = 'This TEXTAREA provides context - help. Click on any Input or use the TAB key to get more information about the input field.'
}
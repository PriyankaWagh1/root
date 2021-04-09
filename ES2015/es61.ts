//1
console.log('E1');
var num = 10;
{
    const num= 20;
    console.log(num);
}
console.log(num);

//2
console.log('E2');
const a=1;
if(a===1){
    let a='Hello';
    console.log(a);
}
console.log(a);

//3
console.log('E5');
const order={
    id: 2,
    title : 'Biscuits',
    price: 50,

    orderDetails : function printOrder(){
        return `Id: ${this.id}, Title: ${this.title}, Price: ${this.price}`;
    },

    priceDetails: function getPrice(){
        return  this.price;
    }
};
console.log(order.orderDetails());
console.log(order.priceDetails());

const copyOrder= Object.assign({},order);
console.log(copyOrder);

//4
console.log('ES4');
let names=['Tom','Iavn','Jerry'];
let array1=names.map((str1)=>({name:str1, length: str1.length}));
    
console.log(array1);


//5
console.log('E5');
function add(a=3, b=2){return a+b;}
console.log(add());
console.log(add(4,5));

function userFriends(userName,...friends){
        console.log(userName, friends);
    
}

userFriends('Akash',['Vishal','Atul']);
userFriends('Mango',['Banana','Orange','Guava']);

function printCapitalNames(...array2){
    for(let i in array2){
        console.log(array2[i].toUpperCase());
    }
}


let array2=['Tom','Harry','Ron','Ivan','John'];
printCapitalNames(...array2);

//6
console.log('E6');
let laptopModel= "Lenovo Ideapad";
let deskNo= 45;
let name2= "Tom";

let ticket=`Hi Sysnet! There is a system update for laptop model ${laptopModel}, desk no.: ${deskNo} of user ${name2}`;
console.log(ticket);

//7
console.log('E7');
let array3=['hello','there','welcome','es6'];
let [one,two,three,four]=array3;
console.log(three);

var organisation={
    organisationName:"flipkart",
    address:{
        city:"Mumbai",
        pincode:"411003",
    },
}
let {organisationName,address:{city,pincode}} = organisation;
console.log(pincode);

//8
console.log('E8')
class Account {
    

    constructor(id, name, balance){
        this.id=id;
        this.name=name;
        this.balance=balance;
        totalBalance.push(balance);
    }
}

class SavingsAccount extends Account{
    interest: any;
    constructor(id, name, balance, interest){
        super(id, name, balance);
        this.interest=interest;
    }
}

class CurrentAccount extends Account{
    cashCredit: any;
    constructor(id, name, balance, cashCredit){
        super(id, name, balance);
        this.cashCredit = cashCredit;
    }
}

var totalBalance= [];

let cc1 = new CurrentAccount(1, "a", 1000, 400);
let cc2 = new CurrentAccount(2, "b", 2000, 400);
let cc3 = new CurrentAccount(3, "c", 5000, 400);
 
let s1 = new SavingsAccount(6, "x", 10000, 5);
let s2 = new SavingsAccount(6, "y", 6000, 6);
let s3 = new SavingsAccount(6, "z", 8000, 7);

function totalBankBalance(){
    console.log(totalBalance.reduce((a,b)=> a + b, 0));
}

totalBankBalance();
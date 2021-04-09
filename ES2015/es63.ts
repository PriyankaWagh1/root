//1
console.log('Promises');
const first= new Promise((resolve,reject)=>{
    let x=5;
    if(x==5)
        resolve(x);
    else
        reject(x);

    console.log('First Promise');
})

const second= new Promise((resolve,reject)=>{
    let y=10;
    if(y==10)
        resolve(y);
    else
        reject(y);

    console.log('Second Promise');
})
const allPromise=Promise.all([first,second]);
allPromise.then((values)=>{
    const sum=values.reduce((x,y)=>x+y);
    console.log(sum);
})

//2
console.log('Account')
class Account1 {
    id:number
    name:string
    balance:number

    constructor(id, name, balance){
        this.id=id;
        this.name=name;
        this.balance=balance;
        totalBalance.push(balance);
    }
}

class SavingsAccount1 extends Account1{
    interest: any;
    constructor(id, name, balance, interest){
        super(id, name, balance);
        this.interest=interest;
    }
}

class CurrentAccount1 extends Account1{
    cashCredit: any;
    constructor(id, name, balance, cashCredit){
        super(id, name, balance);
        this.cashCredit = cashCredit;
    }
}

var totalBalance= [];

let c1 = new CurrentAccount1(1, "a", 1000, 400);
let c2 = new CurrentAccount1(2, "b", 2000, 400);
let c3 = new CurrentAccount1(3, "c", 5000, 400);
 
let sa1 = new SavingsAccount1(6, "x", 10000, 5);
let sa2 = new SavingsAccount1(6, "y", 6000, 6);
let sa3 = new SavingsAccount1(6, "z", 8000, 7);

function totalBankBalance1(){
    console.log(totalBalance.reduce((a,b)=> a + b, 0));
}

totalBankBalance1();

//3
console.log("Interface");
interface Printable{
    f_name : string,
    l_name :string,
    print: ()=> string
}
let circle:Printable={
    f_name:"Circle",
    l_name:'Circumference',
    print:():string=>{return circle.f_name+" " +circle.l_name}
}

let employee:Printable={
    f_name:"John",
    l_name:'Chandler',
    print:():string=>{return employee.f_name+" " +employee.l_name}
}


function printAll(circle, employee){
    console.log(circle.print())
    console.log(employee.print())
}
printAll(circle, employee)
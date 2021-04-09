//1
console.log('Fibonacci series');
const next = Symbol();
class Fibonacci{
    previousNo:number 
    currentNo:number
    value:number

    constructor(){
        this.previousNo=0;
        this.currentNo=1;
    }
    [next](){
        this.value = this.previousNo+this.currentNo  
        this.previousNo = this.currentNo
        this.currentNo = this.value

        return this.value
    }
    
}

let f= new Fibonacci();
console.log(f.previousNo);
console.log(f.currentNo);
console.log(f[next]());
console.log(f[next]());
console.log(f[next]());
console.log(f[next]());

//2
console.log('Armstrong Number');
function isArmstrong(num){
    let sum=0
    let temp=num;
    const len= String(temp).split("").length;
    while(temp > 0){
        let remainder=temp % 10;
        sum += remainder ** len;
        temp = Math.floor(temp/10);
    }
    if(sum==num)
        return true;
    else
        return false;
}

function getnextArmstrong(num1){
    while(num1<Number.MAX_SAFE_INTEGER){
        num1++;
        if(isArmstrong(num1)){
            return num1;
        }
    }
}

console.log(getnextArmstrong(4));

//3
console.log("Adding functionality to getnextArtmstrong()");
function isArmstrong3(num){
    let sum=0
    let temp=num;
    const len= String(temp).split("").length;
    while(temp > 0){
        let remainder=temp % 10;
        sum += Math.pow(remainder,len)
        temp = Math.floor(temp/10);
    }
    if(sum==num)
        return true;
    else
        return false;
}
let nums=0;
function reset(){
    nums=0;
    return nums;
}

function getnextArmstrong1(){
    while(nums<10001){
        if(nums<1000){
            nums++;
            if(isArmstrong3(nums))
                return nums;
            else{
                reset();
                return "Number is above 1000";
            }
        }
    }
}

console.log(getnextArmstrong1());

//4
console.log("Chatroom using set and map");
const chatroom1=new Map();
chatroom1.set('c11','Hello World!');
chatroom1.set('c12','Hello there!');
chatroom1.set('c13','C13 here');

console.log(chatroom1);

const chatroom2=new Map();
chatroom2.set('c21','Are you there?');
chatroom2.set('c22','Connecting...');
chatroom2.set('c23','Good morning');

console.log(chatroom2);

function users(chatroom_name){
    chatroom_name.forEach((value,key) => {
        console.log(`${key}`);        
    });
}
function messages(chatroom_name){
    chatroom_name.forEach((value,key) => {
        console.log(`${value}`);        
    });
}

users(chatroom1);
messages(chatroom1);

users(chatroom2);
messages(chatroom2);

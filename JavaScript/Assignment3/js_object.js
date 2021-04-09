class Rectangle{
    constructor(width,height){
        this.width= width;
        this.height= height;
    }
};

Rectangle.prototype.getArea = function getArea(){
    return this.width * this.height;
}
 function f1(){
     var obj=new Rectangle(3,5);
     document.getElementById('demo').innerHTML="Width: "+ obj.width + "  Height: " + obj.height;
 }

function area(){
    var r1=new Rectangle(4,5);
    document.getElementById('area').innerHTML="Area of rectangle : " + r1.getArea();
}

function f3(){
    var r2= new Rectangle(4,5);
    r2.height=50;
    document.getElementById('new_height').innerHTML="Area of rectangle: "+r2.getArea() +" (width: "+ r2.width + ", height: "+r2.height+")";
}

//4
let NameDetails = {firstName: 'Nikhil', lastName: 'G'}
console.log(NameDetails)
NameDetails.lastName = 'Goud'
console.log(NameDetails)

//5
NameDetails.middleName = 'Rakesh'
console.log(NameDetails)

//6
var string = "{firstName: 'Nikhil', lastName: 'Goud'}";
eval('var obj = ' + string)
console.log("eval = ", obj)

//7
var str = '{ "fisrtName": "Nikhil", "lastName": "Goud" }'
var obj1 = JSON.parse(str)
console.log("JSON.parse() = ", obj1)
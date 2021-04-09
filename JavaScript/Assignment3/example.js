function person(fname,lname,age,skills,dob,address,married,profession){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.dob=dob;
    this.address=address;
    this.married=married;
    this.profession=profession;
}

person1= new person("nikhil","goud",22,["c","c++"], "24/10/1996",{city:"hyderabad",pincode:"521185"},"no","sr. analyst");
person2=new person("harish","chinna",21,["c","Html"], "08/06/1997",{city:"amritsar",pincode:"500038"},"no","jr. analyst");

print=function()
{
    console.log(person1);
    console.log(person2);
}();
console.log("New objects");
amitabh= new person("amitabh","bachchan",22,["c","c++"], "24/10/1996",{city:"hyderabad",pincode:"521185"},"no","sr. analyst");
abhishek=new person("abhishek",21,["c","Html"], "08/06/1997",{city:"amritsar",pincode:"500038"},"no","jr. analyst");

var abhishek=Object.create(person2);

print=function()
{
    console.log(amitabh);
    console.log(abhishek.lname);
    console.log(abhishek.address);
}();

console.log('object Aaradhya');
aaradhya= new person("amitabh","bachchan",22,["c","c++"], "24/10/1996",{city:"hyderabad",pincode:"521185"},"no","sr. analyst");

var aaradhya=Object.create(amitabh);
print=function()
{
    console.log(aaradhya);
}();

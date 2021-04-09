"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1
console.log('E1');
var num = 10;
{
    var num_1 = 20;
    console.log(num_1);
}
console.log(num);
//2
console.log('E2');
var a = 1;
if (a === 1) {
    var a_1 = 'Hello';
    console.log(a_1);
}
console.log(a);
//3
console.log('E5');
var order = {
    id: 2,
    title: 'Biscuits',
    price: 50,
    orderDetails: function printOrder() {
        return "Id: " + this.id + ", Title: " + this.title + ", Price: " + this.price;
    },
    priceDetails: function getPrice() {
        return this.price;
    }
};
console.log(order.orderDetails());
console.log(order.priceDetails());
var copyOrder = Object.assign({}, order);
console.log(copyOrder);
//4
console.log('ES4');
var names = ['Tom', 'Iavn', 'Jerry'];
var array1 = names.map(function (str1) { return ({ name: str1, length: str1.length }); });
console.log(array1);
//5
console.log('E5');
function add(a, b) {
    if (a === void 0) { a = 3; }
    if (b === void 0) { b = 2; }
    return a + b;
}
console.log(add());
console.log(add(4, 5));
function userFriends(userName) {
    var friends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        friends[_i - 1] = arguments[_i];
    }
    console.log(userName, friends);
}
userFriends('Akash', ['Vishal', 'Atul']);
userFriends('Mango', ['Banana', 'Orange', 'Guava']);
function printCapitalNames() {
    var array2 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array2[_i] = arguments[_i];
    }
    for (var i in array2) {
        console.log(array2[i].toUpperCase());
    }
}
var array2 = ['Tom', 'Harry', 'Ron', 'Ivan', 'John'];
printCapitalNames.apply(void 0, array2);
//6
console.log('E6');
var laptopModel = "Lenovo Ideapad";
var deskNo = 45;
var name2 = "Tom";
var ticket = "Hi Sysnet! There is a system update for laptop model " + laptopModel + ", desk no.: " + deskNo + " of user " + name2;
console.log(ticket);
//7
console.log('E7');
var array3 = ['hello', 'there', 'welcome', 'es6'];
var one = array3[0], two = array3[1], three = array3[2], four = array3[3];
console.log(three);
var organisation = {
    organisationName: "flipkart",
    address: {
        city: "Mumbai",
        pincode: "411003",
    },
};
var organisationName = organisation.organisationName, _a = organisation.address, city = _a.city, pincode = _a.pincode;
console.log(pincode);
//8
console.log('E8');
var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        totalBalance.push(balance);
    }
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(id, name, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    return SavingsAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, name, balance, cashCredit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cashCredit = cashCredit;
        return _this;
    }
    return CurrentAccount;
}(Account));
var totalBalance = [];
var cc1 = new CurrentAccount(1, "a", 1000, 400);
var cc2 = new CurrentAccount(2, "b", 2000, 400);
var cc3 = new CurrentAccount(3, "c", 5000, 400);
var s1 = new SavingsAccount(6, "x", 10000, 5);
var s2 = new SavingsAccount(6, "y", 6000, 6);
var s3 = new SavingsAccount(6, "z", 8000, 7);
function totalBankBalance() {
    console.log(totalBalance.reduce(function (a, b) { return a + b; }, 0));
}
totalBankBalance();
//# sourceMappingURL=es61.js.map
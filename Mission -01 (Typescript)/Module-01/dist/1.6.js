"use strict";
//2 types of functions: normal and arrow functions
//normal functions
function addNum(num1, num2) {
    return num1 + num2;
}
//arrow functions
const addNumArrow = (num1, num2) => {
    return num1 + num2;
};
//method = function inside an object
let userOne = {
    name: 'user',
    bankBalance: 0,
    addBalance(bankBalance) {
        return `account balance: ${bankBalance + this.bankBalance}`;
    },
};
//another example of method
const arr = [2, 5];
const getSqr = arr.map(e => e * e); //normal map
const getSqrTwo = arr.map((e) => e * e); //

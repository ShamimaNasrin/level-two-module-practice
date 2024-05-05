//2 types of functions: normal and arrow functions

//normal functions
function addNum(num1: number, num2: number): number {
    return num1 + num2;
}

//arrow functions
const addNumArrow = (num1: number, num2: number): number => {
    return num1 + num2;
}

//method = function inside an object
let userOne = {
    name: 'user',
    bankBalance: 0,
    addBalance(bankBalance: number): string {
        return `account balance: ${bankBalance + this.bankBalance}`;
    },
}

//another example of method
const arr: number[] = [2, 5];

const getSqr = arr.map(e => e * e); //normal map
const getSqrTwo: number[] = arr.map((e: number): number => e * e); //
/* Data Types*/

let variable = "Hello"

variable = "string"

//we cannot re declare a number if a variable is a string already, but in js we can do this
variable = 28;


//we can explicitly provide types in TS

let ageWithType: number;

// ageWithType = "number";

ageWithType = 28;

console.log(ageWithType);

//Union Types
let testStringorNumber: string| number;

testStringorNumber = "name";
testStringorNumber = 28;
// testStringorNumber = [];

//Array

let arrayNames = ["ahmed", "hassan", "kashif"]
console.log(arrayNames);

arrayNames.push("ahsan")
console.log(arrayNames);

// arrayNames.push(28); numbers are not pushed to an array with strings

let arrayNumbers = [1,2,3,4,5]
arrayNumbers.push(6)
console.log(arrayNumbers);

// arrayNumbers.push("string"): strings are not pushed to an array with numbers



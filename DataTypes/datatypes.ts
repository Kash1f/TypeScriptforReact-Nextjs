/* DATA TYPES*/

let variable = "Hello"

variable = "string"

//we cannot re declare a number if a variable is a string already, but in js we can do this
// variable = 28;


//we can explicitly provide types in TS

let ageWithType: number;

//ageWithType = "number";

ageWithType = 28;

console.log(ageWithType);

//Union Types
let testStringorNumber: string| number;

testStringorNumber = "name";
testStringorNumber = 28;
//testStringorNumber = [];

/* ARRAYS */

let arrayNames = ["ahmed", "hassan", "kashif"]
console.log(arrayNames);

arrayNames.push("ahsan")
console.log(arrayNames);

//arrayNames.push(28); numbers are not pushed to an array with strings

let arrayNumbers = [1,2,3,4,5]
arrayNumbers.push(6)
console.log(arrayNumbers);

//arrayNumbers.push("string"): strings are not pushed to an array with numbers


//But how will we define our array types?

let testStringArray : string[]; //only string array

// testStringArray = [1,2,3,4]
testStringArray =["hello", "table", "chair"]

let testNumberArray: number[]; //only number array
// testNumberArray = ["hello", "table"];
testNumberArray = [1,2,3,4]

//Union arrays

let testNumberorStringArray: (number | string) []
testNumberorStringArray = ["name", 23, "hi"]

//OBJECTS

let user = {
    username: "Kashif",
    age: 23,
    isAdmin: true
}

user.age = 22;
user.age = "twenty two"; //this cannot happen because it is defined as a number, but this is possible in Javascript
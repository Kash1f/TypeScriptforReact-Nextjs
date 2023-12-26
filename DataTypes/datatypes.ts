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


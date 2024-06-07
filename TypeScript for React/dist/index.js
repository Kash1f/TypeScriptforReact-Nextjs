"use strict";
//Basic Types
let id = 5;
let company = "Ky Labs";
let isPublishes = true;
let abc = "Hello";
let ids = [1, 2, 3];
//Union : can hold multiple types
let uid;
uid = '22';
// uid = "Hello"
//Enums: Enums allow us to define a set of named constants either numeric or string
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Right"] = 2] = "Right";
    Direction1[Direction1["Left"] = 3] = "Left";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);

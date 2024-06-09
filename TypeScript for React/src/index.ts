//Basic Types

let id: number = 5
let company: string = "Ky Labs"
let isPublishes: boolean = true
let abc: any = "Hello";

let ids: number[] = [1,2,3]


//Objects

const user: {
    id: number,
    name:string
} = {
    id:1,
    name:'John'
}

//Type Assertion

let cid: any = 1
let customerId = <number>cid




//Union : can hold multiple types
let uid: string|number
uid = '22'
// uid = "Hello"

//Enums: Enums allow us to define a set of named constants either numeric or string.  0,1,2,3,4 by default

enum Direction1 {
    Up,
    Down,
    Right,
    Left
}

console.log(Direction1.Up);


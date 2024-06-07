//Basic Types

let id: number = 5
let company: string = "Ky Labs"
let isPublishes: boolean = true
let abc: any = "Hello";

let ids: number[] = [1,2,3]


//Union : can hold multiple types
let uid: string|number
uid = '22'
// uid = "Hello"

//Enums: Enums allow us to define a set of named constants either numeric or string

enum Direction1 {
    Up,
    Down,
    Right,
    Left
}

console.log(Direction1.Up);


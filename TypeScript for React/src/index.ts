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

//Functions

function addNum(x: number, y: number): number{
    return x + y
}

console.log(addNum(1,4));

//Interfaces
type User = {
    id: number
    name: string
}

const user1: User = {
    id: 1,
    name: 'John'
}

//Function Interfaces

interface MathFunc{
    (x: number, y:number) : number
}

const add: MathFunc = (x:number, y:number): number => x + y

//Classes

class Person{
    private id: number
    private name: String

    //Classes can have methods which are functions in class
    //Constructor will run when an object is instantiated from that class
    constructor(id:number, name:String){
        this.id = id;           //means the class that we are in or the current instance
        this.name= name;    
    }
}

//this will create a new Person object in this variable called obj
const obj = new Person(1,'Kashif');

class Employee extends Person{
    position: String
    
}

//Data Modifiers


//Implenting Interface in class
type User1 = {
    id: number
    name: string
    age?: number
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


let sayHi = () => {
    console.log("Hello, this is a function");
}

sayHi();

//the function above returns a type void, we can return numbers or strings by the following example

let funcReturnstring = () :string=>{
    console.log("Hi");
    return "lama dev"
    
}

let multiple = (num:number) => {
    return num*2
}

let multiple2 = (num:number) => {
    return num*2
}

let sum = (num1:number, num2:number) => {
    return num1 + num2
}

sum (2,3)

//if we want another value in the arguments or parameter but it is not necesarilly required

// let sum = (num1:number, num2:number, another?:number) => {
//     return num1 + num2
// }

// sum (2,3)

let func = (user:{username:string,age:number,phone?:string}) =>{
    console.log(user.username);
}

//TYPE ALIASES

type UseType ={
    username:string;
    age:number;
    phone?:string
}

let betterFunc = (user:UserType)=>{
    console.log(user.username);
    
}
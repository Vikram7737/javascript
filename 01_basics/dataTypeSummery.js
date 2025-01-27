// type of data types is based on , how data is stored in memory and access

// two types 

// 1- primitive // all the primitive data type are call by value

// 7 type  : String , Number , boolean , null , undefined , Symbol => used for making unique , BigInt

// const score = 100; // in js ther is no need of define type of data 

// const id = Symbol('123')  // unique id
// const anotherId = Symbol('123')  // unique id 
// console.log(id === anotherId);  // false

const bigNumber =346542136547899654n

// js is dynamic typed language

// 2- Reference (Non primitive)

// Array , Objects, Functions 

const heros = ["shaktiman", "naagraj", "doga"];

let myobj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

// -----------------------------------------------------

// stack (primitive) , Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename  // call by value 
anothername = "chaiaurcode"

console.log(myYoutubename);  // hiteshchoudharydotcom // due to call by value both value are not same 
console.log(anothername);   // chaiaurcode

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne.email); // user@google.com  // reference milta hai jo bhi changes hote hai bo sb main memory me hote hai
console.log(userTwo.email); // user@google.com





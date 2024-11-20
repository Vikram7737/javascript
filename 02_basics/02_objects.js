
// objects 

// 1- leterals
// 2- constructor  => Object.create

// 3- Singleton  => unique occurance, when we create object with constructor it's occurance is only once

const obj = {} // empty object

const mySym = Symbol("key1");
// console.log(typeof(mySym));
const obj1 = {
    name: "Hitesh",   // name => also can give as "name"
    age: 18,
    "full name": "Hitesh Choudhary",
    [mySym]: "key1",          // symbol
    location: "jaipur",
    email: "jitesh@google.com",
    isLoggedIn: false,
    lastLoginDay: ["monday", "tuesday"],
}
// console.log(typeof(obj1[mysym]));

// how to access object 

// using dot operator

// console.log(obj1.name);
// console.log(obj1.email);

// square bracket
//console.log(obj1["full name"]);

obj1.age=20;
console.log(obj1.age);

//Object.freeze(obj1);  // changes do not reflects on object after freeze
obj1.age=22;
console.log(obj1.age);

obj1.greetings = function(){
    console.log("welcome to js");
}
obj1.greetings = function(){
    console.log(`hello js users ${this.name}`);
}
obj1.greetings();


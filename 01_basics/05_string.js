// string can be denoted in single code as well as in double code
// 'hello', "hello"

const name = "hitesh";
const repoCount = 50;

// concatination 

// console.log(name + repoCount + "value"); // not use now a days

console.log(`hello my name is ${name} and my repo count is ${repoCount} `); // this way used in modern days

// another way to declare string 
 
const gameName = new String('hitesh'); // this way gives key value pair , lenth and many more methods ;

// master this methods

// access prototype

// console.log(gameName[0]);  // h
// console.log(gameName.__proto__); 

// we can access all the methods of prototype

// console.log(gameName.length);
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));  // find index of t

const newString = gameName.substring(0, 4);  // exclude 4th index or last index given
// console.log(newString);

const anotheString = gameName.slice(-4,4)  // can give -ve value also
console.log(anotheString);

const newStringOne = "    hitesh    *&(";
console.log(newStringOne);
console.log(newStringOne.trim()); // hitesh    *&(  // remove all the spaces in starting and at last
// visit mdn





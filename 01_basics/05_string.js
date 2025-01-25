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

// visit mdn for more string functions

// The slice() method is used to extract a portion of an array without modifying the original array. It returns a new array.
// Does not modify the original array.
// Returns a new array with the selected elements.
// array.slice(start, end)

// The splice() method is used to add, remove, or replace elements in an array. It modifies the original array.
// Modifies the original array.
// Returns an array containing the removed elements.
//array.splice(start, deleteCount, item1, item2, ...)


// Remove elements
const array = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 1
const removed = array.splice(1, 2);

console.log(removed); // [2, 3]
console.log(array);   // [1, 4, 5] (original array is modified)

//  Add elements
const array = [1, 2, 3, 4, 5];

// Add two elements at index 2
array.splice(2, 0, 'a', 'b');

console.log(array); // [1, 2, 'a', 'b', 3, 4, 5]

// Replace elements
const array = [1, 2, 3, 4, 5];

// Replace 2 elements starting from index 1
array.splice(1, 2, 'x', 'y');

console.log(array); // [1, 'x', 'y', 4, 5]










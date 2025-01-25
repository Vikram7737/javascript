
// array 

// shallow copy => shares same memory   , data value get change
// deep copy => don't share memory      , data value don't change

const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"];
const myHeros = ["shaktiman" , "nagaraj"];

const myArr2 = new Array (1, 2, 3, 4)
console.log(myArr[1]);

console.log(myHeros[1]);

// methods  

myArr2.push(myHeros);      // an array can be push into another array  // work on same array no need to make new array
console.log(myArr2[4][0]); // shaktiman

// concatination 

const marvel_heroes = ["thor", "spiderMan", "IronMan"];
const dcHeros = ["antMan", "batman"];

const all_heroes = marvel_heroes.concat(dcHeros); // concat() method returns the new array
// console.log(all_heroes);

// Spread operator

const allHeros = [...marvel_heroes, ...dcHeros];  // this is more useful , can give more than 2  arrays
console.log(allHeros);

const another_array = [1, 2, [4, 5], 6,[7, 8, [9, 10]]];
const another_NewArray = another_array.flat(1);   // Inifinity => is the depth of the array , can give 2 at the place of Infiniity
// flat => method reduces the dimentions of array , like 2d to 1d , 3d to 2d etc;

console.log(another_NewArray);
// output
[
    1, 2, 4,  5, 6,
    7, 8, 9, 10
  ]

// to check given data is array or not 
// const array = "hitesh";
// console.log(Array.isArray(array));
console.log(Array.from("hitesh"));     // from => method conversts given string , object to the array

console.log(Array.from({name : "hitesh"})); // interesting // [] => don't understand whoom to covert key/value so gives [] string 

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, 500, score3));  // makes an array of given entries(can be simple value, arrays, object etc);

// slice , splice 

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






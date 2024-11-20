
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






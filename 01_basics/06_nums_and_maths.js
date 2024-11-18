const score = 400;
const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(0));         // add zero after decimal upto given number

const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(2));  // round of the value 
// if number you input is less than the digit less than befor the decimal
// gives output 1.1e+3


// there are many more functions for Numbers

// ++++++++++++++++++++++++ Maths ++++++++++++++++

// Maths is an object contains many default values

console.log(Math);

// methods

// abs => Math.abs(-4)  // gives +ve
// round => Math.round(4.3)  => 4
// floor , ceil 

console.log(Math.random());
console.log((Math.random*10) + 1);

const min = 10 ;
const max = 20 ;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // generate a number in between min and maxm




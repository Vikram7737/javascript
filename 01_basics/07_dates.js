
// Dates 

let myDate = new Date();

// console.log(myDate.toString());   // Tue Nov 19 2024 07:12:37 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());   // Tue Nov 19 2024

// myDate.toDateString()  this methods remove information of time and other information after time

// console.log(myDate.toLocaleString());  // 11/19/2024, 7:18:25 AM 

// console.log(typeof myDate);

// declare new date/perticular date

let myCreateDate = new Date(2023, 0, 23);
// console.log(myCreateDate.toDateString());

// in js months counting start with zero 
// january => 0'th month
// december => 11'th month
// console.log(myCreateDate.toLocaleString());

// date with time for new date 

let myCreateDate1 = new Date(2023, 0, 23,5,2);
// console.log(myCreateDate1.toLocaleDateString());  // gives only date => 1/23/2023
// console.log(myCreateDate1.toLocaleString());

// formates of date

let myCreateDate2 = new Date("01-06-2023");  // in format like yy-MM-DD month start with 01
console.log(myCreateDate2.toDateString());   // output comes in format => Jan 06 2023 => MM-DD-YY

// Time Stamp

let myTimeStamp = Date.now();
// console.log(myTimeStamp);  1732002550317 => unit is milisecond
console.log(myCreateDate2.getTime());  // we compare dates used in booking in time stamp

// for time stamp in seconds 

console.log(Math.floor(Date.now()/1000));  // gives time in miliseconds , floor used for remove decimal 

// get month

let newDate = new Date()
console.log(newDate.getMonth()+1)  // gives month from given date
console.log(newDate.getDay());     // gives day from the date

// internationalization

// customization of object

newDate.toLocaleString('default',{
    weekday: "long",
})













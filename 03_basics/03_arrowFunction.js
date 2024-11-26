
// () => {}  this is an arrow function

const one = () => {           // function with no parameters
    console.log("hitesh");
}
one();

const two = (num) =>{        // function with argument
    return num+2;
}
console.log(two(5));

// what is arrow function ?
// arrow function is a concise way to write regular functions using a fat arrow (=>) instead of the function keyword;

// what is the difference between regular function and arrow function

function multiply(num1, num2) {    // regular function 
    const result = num1 * num2
    return result
}
console.log(multiply(4, 5));

const mul = (num1, num2) => (num1*num2);  // arrow function 
// if there is only one line no need of return statement it automatically return the statement
console.log(mul(6, 5));

//  how to return object in arrow function 
const fun = () => ({userName: "hitesh"});
console.log(fun());



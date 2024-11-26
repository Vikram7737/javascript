let a=50;
var b= 40;
const c= 30;

console.log(a);  // 50
console.log(b);  // 40
console.log(c);  // 30

if(true){
    var b=10;
    let a=10;
    const c=10;
    console.log(b);  // 10
}
console.log(a);    // 50    value doesn't affected  
console.log(b);    // 10    value affected due to change in value of variable in local scope , don't prefer to use
console.log(c);    // 30    value doesn't affected

console.log(addOne(5));  // output 6  , is tarike se function bna kar function difinition se phle function call kar sakte hai
function addOne(num1){  
    return num1+1;
}

console.log(addTwo(5));
const addTwo = function(num){    // jab jam function ko kisi variable me hold karte hai tb function difinition se pahle fuction call nhi kar sakte hai
    return num+1;
}   //   consept is hoisting 
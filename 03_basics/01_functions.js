function sum(a,b){
    return a+b;
}
console.log(sum(3,4));

const fun = () => {
    console.log("hitesh");
}
fun();

function logInUserMessage(message){
    return `${message} just logged in `;
}
console.log(logInUserMessage("hitesh"));  // hitesh just logged in 
console.log(logInUserMessage(""));        //  just logged in 
console.log(logInUserMessage());          //    undefined just logged in 

// rest operator in function 

function calculateCartPrice(...num){   // rest operator / spread operator
    return num;

}
console.log(calculateCartPrice(20,30,40,50));
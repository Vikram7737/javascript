
// Immidiately invoked function expression 

// function definiton ke just bad function ko call karna taki apna global scope polute na ho 

(function chai(){  // this is named IIFE with name chai         // just like arrow function ()()
    console.log("DB connected");
})();  // semicolon lagane ki jarurat hai execution ko rokne ke liye

( () =>{
    console.log(`DB connected two`);
}  )();

( (name) => {
    console.log(`my name is ${name}`);
    
}  )("hitesh");    // passing value to IIFE
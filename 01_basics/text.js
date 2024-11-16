const accountId = 144553;
let accountEmail="hitesh@google.com";
var accountPassword="1234";  
/*
prefer not to use var 
bcs of issue in block scope and functional scope
*/ 
accountCity="jaipur";  // we can initialize variable in this way

// accountId=2; not allowed

accountEmail="vkpatel@gmail.com";
accountPassword="12234";
accountCity="hyderabad";





console.table([accountId , accountEmail ,accountPassword , accountCity]);
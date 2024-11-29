
// for of loop

// used  for arrays 

// ["", "", "", ""];
// [{}, {}, {}];

// const arr = [1, 2, 3, 4];
// for(const num of arr){
//     console.log(`number is ${num}`);
// }

// const greetings = " Hello Hitesh ";
// for(const greet of greetings){
//     console.log(`char id ${greet}`);
// }


// MAP

const map = new Map();
map.set('USA',"united state of america");
map.set('RSA',"South Africa");
map.set('IN',"INDIA");

console.log(map);

// how to iterate over map 

for(const [key, value] of map){
    console.log(key , ':-' , value);
}

// can we traverse object using for of loop 

const myobj = {
    "IN":"INDIA",
    "USA":"SOUTH AFRICA",
    "NEP":"NEPAL"
}

// how to iterate over an object

for(const [key, value] of myobj){    // TypeError: myobj is not iterable
    console.log(key,':-',value);
}

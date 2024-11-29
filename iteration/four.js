
//  for of loop don't work for objects

// what is alternate for objects iteration

// for in loop

const myobject = {
    js: "for javascript",
    cpp: " for c++",
    rb: " for ruby"
}

for(const key in myobject){
    console.log(`${key} is used ${myobject[key]}`);
}
// js is used for javascript
// cpp is used  for c++
// rb is used  for ruby

// for in loop can also use for arrays 

const arr = ["js","cpp","java"];

for (const key in arr) {
    console.log(key);
}
// 0
// 1
// 2

for (const key in arr) {
    console.log(arr[key]);
}
// js
// cpp
// java

//  for in loop can't use for map iteration


// const tinderUser = new Object();  // Singleton object
// console.log(tinderUser);

const tinderUser ={
        
}
tinderUser.name = "hitesh";
tinderUser.id = "Hitesh_93";
tinderUser.email = "hitesh@microsoft.com";


const regularObject = {
    email: "some@email.com",
    userName: {
        
        fullName: {
            firstName: "hitesh",
            lastName: "choudhary",
        }
    }
}

// object ke andar object ko dot lgakar access kar sakte hai

//console.log(regularObject.userName.fullName.lastName);
//console.log(regularObject.email);

const obj1 = { 1: "a" , 2 : "b"};
const obj2 = { 3: "c" , 4 : "d"};

//const obj3 = { obj1 , obj2 };

// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1, ...obj2}  // spread method , mostly used 
console.log(obj3);

// Array of objects 

const users = [
    {
        1: "id",
        email: "a@mail.com",
    },
    {

    },
    {

    }
]

console.log(users[0].email);

console.log(Object.keys(tinderUser));  // [ 'name', 'id', 'email' ]  collect all the id from object and make an array
console.log(Object.values(tinderUser));  // [ 'hitesh', 'Hitesh_93', 'hitesh@microsoft.com' ] collect all the values from object and make an array
console.log(Object.entries(tinderUser));  // collect all the values and keys from object and make an array of arrays

console.log(tinderUser.hasOwnProperty('id'));  // check whether key is present or not







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

// console.log(Object.keys(tinderUser));  // [ 'name', 'id', 'email' ]  collect all the id from object and make an array
// console.log(Object.values(tinderUser));  // [ 'hitesh', 'Hitesh_93', 'hitesh@microsoft.com' ] collect all the values from object and make an array
// console.log(Object.entries(tinderUser));  // collect all the values and keys from object and make an array of arrays

// console.log(tinderUser.hasOwnProperty('id'));  // check whether key is present or not

// destructuring of object 

const course = {
     courseName: "js",
     price : 999,
     courseInstructor : "Hitesh",
}

const {courseInstructor : instructor} = course;  // object ko destructor kar dia ab isko instructor nam se call kar sakenge
//console.log(courseInstructor);
console.log(instructor);

const navbar = ({company}) => {    // this destructuring used in the react props

}
navbar(company = "hitesh");


// froms of API

// JSON
// {
//     "name" : "hitesh",
//     "course" : "js",
//     "city" : "jaipur",
// }


// [
//     {},
//     {},
//     {}
// ]

// api => random user
// json formatter

// how api data looks like

// {
//     "results": [
//       {
//         "gender": "male",
//         "name": {
//           "title": "Mr",
//           "first": "Jamie",
//           "last": "Kuhn"
//         },
//         "location": {
//           "street": {
//             "number": 5445,
//             "name": "King Street"
//           },
//           "city": "Derby",
//           "state": "County Fermanagh",
//           "country": "United Kingdom",
//           "postcode": "MH4 1BL",
//           "coordinates": {
//             "latitude": "-10.7299",
//             "longitude": "-16.9646"
//           },
//           "timezone": {
//             "offset": "-7:00",
//             "description": "Mountain Time (US & Canada)"
//           }
//         },
//         "email": "jamie.kuhn@example.com",
//         "login": {
//           "uuid": "7828443d-19e6-447d-9e06-faca5d57c707",
//           "username": "angrykoala963",
//           "password": "swordfis",
//           "salt": "eK6yqDZY",
//           "md5": "fe98d488b9ed5a62631af3453822f0aa",
//           "sha1": "2fb7770028f4ce7f0f9a5daad4d19b44b545b6dd",
//           "sha256": "603ca255464a90129e474af9544a22205c6f3cb75aa6fdbe559a13d0d2c9ce35"
//         },
//         "dob": {
//           "date": "1981-03-14T03:54:09.312Z",
//           "age": 43
//         },
//         "registered": {
//           "date": "2018-04-06T18:50:44.335Z",
//           "age": 6
//         },
//         "phone": "016977 37413",
//         "cell": "07959 265611",
//         "id": {
//           "name": "NINO",
//           "value": "CN 37 23 10 T"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/67.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
//         },
//         "nat": "GB"
//       }
//     ],
//     "info": {
//       "seed": "5e27d61435ae8e19",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }








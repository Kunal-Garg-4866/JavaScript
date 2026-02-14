//const TinderUser = new Object(); // creating object using object  this is singleton object - only one object will be created
const tinderUser = {}; // creating object using object literal syntax
tinderUser.id = "12345";
tinderUser.name = "John Doe";
tinderUser.isLoggedIn = true;
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstName: "John",
            lastName: "Doe"
        }
    }
}

//console.log(regularUser.fullname?.username.firstName);

const obj1 = { 1: "a" , 2: "b"};
const obj2 = { 3: "c" , 4: "d"};
//const obj3 = {obj1 , obj2}; // nested object
 //const obj3 =Object.assign( {},obj1, obj2); // it will merge obj2 into obj1 and return obj1
 const obj3 = {...obj1, ...obj2}; // it will merge obj2 into obj1 and return obj1
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
     {
        id: 1,
        email: "h@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// destructuring in objects

const course = {
    courseName : "js in hindi",
    price : 999,
    courseInstructor : "Kunal Garg"
}
//course.courseInstructor;

const {courseInstructor: Instructor} = course; 
console.log(Instructor); 
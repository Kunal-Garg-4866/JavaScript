// singleton - object made by constri=uctor function
//Object.create

// object literals 

// interview question - what is object and how to create object in js
// interviewer ask Create symbol and add to objects key then access it 
const sym1 = Symbol("key1");

const JsUser = {
    name : "Kunal",
    "full name" : "Kunal Garg",
    [sym1] : "mykey1",  // symbol as key in object // put it in square brackets 
    age : 22,
    location : "Ludhiana",
    email : "kunalgarg664@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"]
}

// how to acces object properties

//  console.log(JsUser.name); // not a good way 
//  console.log(JsUser["email"]); // best way to access object properties
//  console.log(JsUser["full name"]);
//  console.log(  JsUser[sym1]);

 //JsUser.email = "kunalgarg6648@gmail.com"
 //Object.freeze(JsUser); // freeze the object - it will not allow to change the object properties
 //JsUser.email = "KU@gamil.com" // it will not change the email property because the object is frozen
 //console.log(JsUser); // it will print the old email because the object is frozen

 JsUser.greeting = function(){
    console.log("Hello JS user");
    
 }
 JsUser.greetingTwo = function (){
    console.log(`Hello Js user , ${this.name}`);
    
 } 
 JsUser.greeting();
JsUser.greetingTwo();
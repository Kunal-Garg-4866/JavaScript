const user = {
    name : "kunal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage();
// user.name = "Kunal Garg";
// user.welcomeMessage();
//console.log(this); // it will print the global object because we are in global scope

// interview question  - global object in node js and in browser is different because in node js we have global object and in browser we have window object

function chai(){
    let username = "Kunal";
    console.log(this.username); // it will give undefined because this is not pointing to the user object it is pointing to the global object and there is no username property in the global object
    
}
//chai(); // it will print the global object because we are in global scope

 // *** interview question - what is the difference between function declaration and function expression in js
// function declaration is hoisted and function expression is not hoisted

// const chaiTwo =  () =>{
//     let username = "Kunal";
//     console.log(this.username);
// }
// chaiTwo();

 // first syntax of arrow function
const addTwo = (num1 , num2) => {
    return num1 + num2;
}
// console.log(addTwo(3,4));

// second syntax of arrow function - if there is only one parameter then we can omit the parentheses
const addTwoOne = (num1,num2) => (num1 + num2); // if there is only one line of code then we can omit the curly braces and the return keyword
const addTwoOneOne = (num1,num2) => num1 + num2;
// console.log(addTwoOne(3,4));
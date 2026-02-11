const accountId  = 1234564;  // cannot be changed 
let accountEmail = "kunalgarg6648@gmail.com"; // can be changed;
var accountPassword = "12345";
accountCity = "Ludhiana";
let accountState;

 //accountId = 2; not allowed 
 accountEmail = "hc@gmail.com";
 accountPassword = "67890";
accountCity = "New York";

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);

/*
prefer not to use var 
beacouse of  issue in block scope and function scope
*/

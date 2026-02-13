const name = "hitesh";
const reCount = 50;
 // console.log(name + reCount + "Value"); not a good syntax  
 // best Sysntax is using template literals
 console.log(`Hello my name is ${name} and my repo count is ${reCount} ` );


 const gameName = new String ("kunalgarg");

//  console.log(gameName[0]);
//  console.log(gameName.__proto__);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt(2));
//  console.log(gameName.indexOf('b'));

 const newString = gameName.substring(0,3);
 console.log(newString);

 const newString2 = gameName.slice(-8,4);
 console.log(newString2);

 
 const url = "https://hiteh.com/hitesh%20garg";
 console.log(url.replace('%20','-'));
 console.log(url.includes('hitesh'));
 console.log(gameName.split('-'));
 
 
 
 

 
 
 
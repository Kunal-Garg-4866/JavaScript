 
 function sayMyName(){
    console.log("k");
    console.log("U");
    console.log("N");
    console.log("A");
    console.log("L");
    
    
 }

 //sayMyName();

 function addTwoNumbers(num1 , num2){
    //option 1 
   // console.log(num1 + num2);

  // option 2
   let result = num1 + num2;
   return result;

 //  option 3
    //return (num1 + num2);
     
 }
 const result = addTwoNumbers(3,4);
// console.log("Result" , result);

function loginUserMessage(username){
    if(!username){
        console.log( "Please enter username");
        return;

       // option 2 
       // return "Please enter username";
        
    }
    return `${username} just logged in`;
}
 // console.log(loginUserMessage("kunal"));

 // interview question what if we did not pass anythinthing in username function 
  //console.log(loginUserMessage()); // it just type undefined just logged in because we did not pass any value in username parameter so it is undefined by default

  function calculateCartPrice(...num1){ // rest operator - it will take all the arguments and put it in an array
    return num1;
  }
  //console.log(calculateCartPrice(200,400,500));

  const user = {
    name : "kunal",
    price:100
  }
  
  function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
  }
   // handleObject(user);
    handleObject({
        name : "kunal",
        price : 100
    })

    const mhyNewArray = [1,2,3,4,5];

    function returnSecondValue(anyarray){
        return anyarray[1];
    }
    console.log(returnSecondValue(mhyNewArray));
    

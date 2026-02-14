let a = 300; // global scope - it is accessible anywhere in the code
if(true){
    let a = 10;
   const b = 20;  // block scope - it is only accessible within the block it is defined in
   // var c = 30; // function scope - it is accessible within the function it is defined in and also outside the function it is defined in but not inside the block it is defined in
    //console.log("Inner:",a);
    
}

//console.log(a);
//console.log(b);
//console.log(c); 

// Interview question - what is scope in js and how many types of scope are there in js
// scope in node js and in console is different because in node js we have module scope and in console we have global scope


function one (){
    const username = "Kunal"
    function two(){
        const website = "youtube";
        console.log(username);

    }
   // console.log(website);
    two();
    
}
//one();

if(true){
    const username = "Kunal";
    if(username == "Kunal"){
        const website = "youtube";
        console.log(username);


    }
        //console.log(website); // it will give error because website is not defined in this scope it is defined in the inner block scope
}
  // console.log(username); not accesable because it is block scope




  // +++++++++++ INTRESTING +++++++++++=
  console.log(addone(5));

  function addone(num){
    return num+1;

  } 
  // hoisting in js 
    addTwo(5); // it will give error because addTwo is a function expression and it is not hoisted like function declaration
    const addTwo = function(num){
        return num+2;
    }
    
//const coding = ["js" , "ruby" , "java"];

//   const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
    
    
// });
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

//  const newNuns = myNums.filter( (num) => {
//      return num > 4; 
//  } ); 

// const newNums = [];

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num);
//     }
// } )


 
//  console.log(newNums);
 

const myNumers = [1,2,3,4,5,6,7,89,0];

  //const newNums = myNumers.map( (num) => num +10); 

  
  // chaining 

  const newNums = myNumers.map( (num) => num *10).map( (num) => num + 1).filter((num) => num >= 42);
 console.log(newNums);
 
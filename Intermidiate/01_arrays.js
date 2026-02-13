// array 
// javascript arrays are dynamic (Resizeable), they can grow and shrink in size as needed. They can hold any type of data, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed, meaning that the first element is at index 0, the second element is at index 1, and so on.
const myArr = [0,1,2,3,4,5];
const meHeros = ["shaktiman", "naagraj"];
const myArr2 = new Array(1,2,3,4,5)
 console.log(myArr[0]);

 // Arrays Methods 

//  myArr.push(6);
//  myArr.push(7); // to add element to end of the array 
//  myArr.pop(); // to remove element from end of the array 

// myArr.unshift(9); // to add element to the beginning of the array
// myArr.shift(); // to remove element from the beginning of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2)); // print element of that index 

const newArr = myArr.join();


//  console.log(myArr);
//  console.log( newArr ); // to convert array to string
//  console.log(typeof newArr);


 /// SLICE AND SPLICE

 console.log("A" , myArr);
 const myn1 = myArr.slice(1,3);
 console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3); // it also include last element but it also change the orignal array 
console.log("C" , myArr);

console.log(myn2);
 
 
 


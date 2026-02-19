// // fo rloop 

// for(let i=0;i<=10;i++)
//     {
//         //console.log(i);
        
// }
//console.log("kunal");

for(let i=0;i<=10;i++){
    const element = i;
    if(element==5){
        //console.log("5 is the best");
        
    }
    //console.log(element);
    
}
         
for(let i=0;i<10;i++){
    //console.log(`Outer loopvalue : ${i}`);
    
    for(let j=0;j<10;j++){
       // console.log(`Inner loop value ${j} and inner loop ${i}`);
       // console.log(i+ '*' + j + ' = ' + i*j);
        
    }
}
let myarray = ["flash","batman","superman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
   // console.log(element);
    
    
}

// break and continue
// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log("Detected five");
//         break; // break control flow of loop
        
//     }
//     console.log(`value of i is ${index}`);
    
    
// }
// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log("Detected five");
//         continue; // skip thst part one time 
         
//     }
//     console.log(`value of i is ${index}`);
    
    
// }


// do while loops
let index = 0;
while(index <=10){
    //console.log(`Value of index is ${index}`);
    index = index+2;
    
}

let myarray2 = ["flash","batman","superman"];

let arr = 0;
while(arr<myarray2.length){
    console.log(`Value is ${myarray2[arr]}`);
    arr = arr+1;
    
}
// for(let i=0;i<=100 ;i++){
//     console.log(i);
// }

let obj = {
    name: "kunal",
    role: "Student",
    age: 21
}

// forin loop 

for (const key in obj) {
    
    const element = obj[key];
    console.log(key,element);
    
}

// forof loop  // iteration over iterable objects 

for (const element of "kunal") {
    console.log(element);
    
}
let i = 0 ;

while (i<6){
    console.log(i);
    i++;
}

let j= 10;

do{
    console.log(j);
    i++;
} while(i<6);
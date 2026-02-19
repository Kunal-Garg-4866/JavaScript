// for of 

const arr = [1,2,3,4,5];

for (const num of arr) {
    //console.log(num);
    
    
}
const greeting = "Hello world!";
for (const greet of greeting) {
   // console.log(`rach char is ${greet}`);
    
    
}

// maos

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
//console.log(map);


for (const [key,value]  of map) {
   // console.log(key,':-' , value);
    
    
}

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
}


// for each mostly users  

const coding = ["js","ruby","java","pyhton"];

// coding.forEach( function (item) {
//     console.log(item);
    

// } )


//  using arrow
 
// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// using function declaration 

// function printme(item){
//     console.log(item);
    
// }
// coding.forEach(printme);

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
    
})
console.log("kunal");
// var is globaally scoped one 
var v = 5;
var h = 6;

let a = 5;  // always use let instead of var 
let b = 6;
//console.log(a + b);
{
    let a = 9; // block scoped one
    console.log(a);
}
console.log(a);
var c = "kunal";
console.log(typeof c);

const a1  = 6; // blocked scoped one
//a1 = a1 +1; // it will give error because const value cannot be changed

let o = {
    "name" : "kunal" , 
    "age" : 24
}
console.log(o);
o.city = "ludhiana";
console.log(o);
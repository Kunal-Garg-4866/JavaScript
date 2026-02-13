const score = 400;

const balance = new Number(100);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));  // espacially in e commerce website

const otherNumber = 23.8966;
//console.log(otherNumber.toPrecision(2));  // it will give us 3 digit number

const hundred = 100000;
//console.log(hundred.toLocaleString('en-IN'));


//+++++++++++++++++ Maths +++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());  // it will give us random number between 0 and 1
console.log((Math.random()*10) +1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1))+min);



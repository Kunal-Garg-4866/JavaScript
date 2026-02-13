// Dates 

let date = new Date();
// console.log(date.toString());
// console.log(date.toDateString);
// console.log(date.toTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(typeof date);

// let myCreatedData = new Date(2020, 11, 24, 10, 33, 30);
// console.log(myCreatedData.toString());

console.log((Date.now()/100));
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'UTC'
});







// console.log("Dates in JS");

const myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate);

// const myCreatedDate = new Date(2005, 10, 30);
// const myCreatedDate = new Date(2005, 10, 30, 18,45);
const myCreatedDate = new Date("2005-11-30");

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.round(Date.now() / 1000));
// console.log("Seconds to Minutes " + Math.round(1748935868 / 60));
// console.log("Minutes to hour " + Math.round(29148931 / 60));
// console.log("Hours to Day " + Math.round(485816 / 24));

const newDate = new Date();

console.log(newDate);
console.log("Month " + newDate.getMonth() + 1);
console.log("Day: like in this case Tuesday " + newDate.getDay());
console.log("Date " + newDate.getDate());

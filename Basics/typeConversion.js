let score = undefined;

// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score);

// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// True => 1
// False => 0
// Null => 0
// "Vishvas" => NaN
// undefined => NaN

let isLoggedIn = null;

let valueInBoolean = Boolean(isLoggedIn);

// console.log(typeof valueInBoolean);
// console.log(valueInBoolean);

let num = "Vishvas";

let valueInString = String(num);

// console.log(valueInString);
// console.log(typeof valueInString);

let value = 3;

let negativeValue = -value;

// console.log(value);
// console.log(negativeValue);

// let str1 = "Hello";
// let str2 = " World";
// let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log(1 + 2);

// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");
// console.log(1 + "2" + "3");
// console.log("1" + "2" + 3);

// console.log(false + true + 2);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

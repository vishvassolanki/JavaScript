"use strict"; // Treat all JS code as newer JS version

let username = "Vishvas";
let age = 19;
let city;
let isLoggedIn = true;
let num = BigInt(123);
let language = null;
// console.log(num);

// console.log(typeof city);
// console.log(typeof language);

// Primitive types (Call by value): nnssbbu
// Null, Number, String, Symbol, Boolean, BigInt, Undefined;

// Non-Primitive (Call by reference)
// Array, Object, Function

let numbers = [1, 2, 3, 4, 5];
let cars = ["Alto", "Mustang", "Fortuner"];

// console.log(numbers);
// console.log(cars);

const user = {
    name: "Vishvas",
    village: "Sara",
    city: "Gir Somnath",
};

// console.log(user);

function sum() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}
// sum();

let id = Symbol("123");
let anotherId = Symbol("123");

// console.log(id == anotherId);
// console.log(typeof id);

let bigNumber = 132435434324243435324n;
// console.log(typeof bigNumber);

// Stack Memory (Primitive), Heap Memory (Non-Primitive)

let a = "Vishvas";
let b = a;
b = "Mayur";

// console.log(a, b);

const userOne = {
    username: "Vishvas",
    email: "vishvas@gmail.com",
};

const userTwo = userOne;

console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "mayur@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

"use strict";
// 🔍 Arrays in TypeScript
// An array in TypeScript is a collection of elements of the same type, stored in a single variable. It allows you to store multiple values in an organized way.
// 📌 Key Features of Arrays:
// ✔️ Can store multiple values of the same type.
// ✔️ Supports various methods like push(), pop(), map(), filter(), and reduce().
// ✔️ Supports type annotations to ensure type safety.
// 1️⃣Declaring an Array
// You can define an array in TypeScript using two methods:
// (a) Using Type Annotation (type[])
let number2 = [10, 20, 30, 40];
let names = ["Sagar", "Amit", "Rahul"];
// (b) Using Generic Syntax (Array<type>)
let number3 = [1, 2, 3, 4];
let names2 = new Array("Apple", "Banana", "Mango");
//  Array Initialization
// (a) Using Type Annotation (type[])
// (b) Using Array Constructor
let number4 = new Array(10, 20, 30); // Creates an array [10, 20, 30]
let emptyArray = new Array(); // Creates an empty array []
let sizeArray = new Array(5); // Creates an array of size 5 (empty slots)
// (c) Using Array.of()
// The Array.of() method creates an array with exact values (avoiding the single-number length issue).
let number5 = Array.of(5); // Creates [5], not an empty array of length 5
let fruits = Array.of("Apple", "Banana", "Mango");
console.log(number5); // Output: [5]
console.log(fruits); // Output: ["Apple", "Banana", "Mango"]
// 2️⃣ Accessing Array Elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
// 3️⃣ Checking Array Length
// You can get the number of elements using .length.
console.log(fruits.length);
console.log(number5.length);

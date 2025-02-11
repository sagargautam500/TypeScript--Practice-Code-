"use strict";
// 5️⃣ Combining and Slicing
// (a) concat() – Merge Two Arrays
// ✅ Returns a new array combining elements.
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2);
console.log(merged); // Output: [1, 2, 3, 4]
// (b) slice() – Extract Part of an Array
// ✅ Returns a new array with selected elements.
let numbers8 = [10, 20, 30, 40, 50];
let sliced = numbers8.slice(1, 4); // Index 1 to 3 (excludes 4)
console.log(sliced); // Output: [20, 30, 40]
// (c) splice() – Remove and Insert Elements
// ✅ Modifies the original array.
let numbers9 = [10, 20, 30, 40];
// numbers9.splice(1, 2, 25, 35); // Remove 2 elements from index 1, add 25 and 35
// console.log(numbers9); // Output: [10, 25, 35, 40]
numbers9.splice(1, 0, 33, 34); //from index 1 ,0 element remove ,add 33 ,34
console.log(numbers9); //Output: [10,33,34,20,30,40]

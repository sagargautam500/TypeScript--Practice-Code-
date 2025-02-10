"use strict";
// TypeScript provides various built-in array methods to manipulate and process data efficiently.
// 1️⃣ Adding and Removing Elements
// (a) push() – Add Elements to End
// ✅ Modifies original array by adding elements at the end.
let numbers4 = [1, 2, 3];
numbers4.push(4, 5);
console.log(numbers4); // Output: [1, 2, 3, 4, 5]
// (b) pop() – Remove Last Element
// ✅ Removes and returns the last element.
let last = numbers4.pop();
console.log(last); // Output: 5
console.log(numbers4); // Output: [1,2,3,4]
// (c) unshift() – Add Elements to Beginning
// ✅ Adds elements at the start of the array.
numbers4.unshift(0);
console.log(numbers4); // Output: [0,1, 2, 3, 4]
// (d) shift() – Remove First Element
// ✅ Removes and returns the first element.
let first = numbers4.shift();
console.log(first); // Output: 0
console.log(numbers4); // Output: [1,2,3,4]

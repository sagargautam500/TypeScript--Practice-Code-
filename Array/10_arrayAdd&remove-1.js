"use strict";
// TypeScript provides various built-in array methods to manipulate and process data efficiently.
// 1️⃣ Adding and Removing Elements
// (a) push() – Add Elements to End
// ✅ Modifies original array by adding elements at the end.
let numbers4 = [1, 2, 3];
let addNum = numbers4.push(6, 7);
console.log(addNum); //Output:[5] ,i.e total length is 5
console.log(numbers4); // Output: [1, 2, 3, 6, 7]
// (b) pop() – Remove Last Element
// ✅ Removes and returns the last element.
let last = numbers4.pop();
console.log(last); // Output: 7
console.log(numbers4); // Output: [1,2,3,6]
// (c) unshift() – Add Elements to Beginning
// ✅ Adds elements at the start of the array.
let addNum1 = numbers4.unshift(0);
console.log(addNum1); //Output: [5].also give total lenghth is 5
console.log(numbers4); // Output: [0,1, 2, 3, 6]
// (d) shift() – Remove First Element
// ✅ Removes and returns the first element.
let first = numbers4.shift();
console.log(first); // Output: 0
console.log(numbers4); // Output: [1,2,3,6]

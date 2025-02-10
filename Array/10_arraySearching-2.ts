// 2️⃣ Searching in Arrays
// (a) indexOf() – Find Position of Element
// ✅ Returns index of the first occurrence (-1 if not found).
let fruits1 = ["Apple", "Banana", "Orange","Pineapple"];
console.log(fruits1.indexOf("Banana")); // Output: 1
console.log(fruits1.indexOf("Orange")); // Output: 2
console.log(fruits1.indexOf("Mango"));  // Output: -1 (not found)

// (b) includes() – Check if Element Exists
// ✅ Returns true if element is found, otherwise false.
let numbers5 = [10, 20, 30,40];
console.log(numbers5.includes(20)); // Output: true
console.log(numbers5.includes(50)); // Output: false

// (c) find() – Get First Matching Element
// ✅ Returns the first element that satisfies the condition.
let found = numbers5.find(num => num > 25);
console.log(found); // Output: 30

// (d) findIndex() – Get Index of First Match
// ✅ Returns index of the first element that meets the condition.
console.log(numbers5.findIndex(num => num > 12)); // Output: 1

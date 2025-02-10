// 📌 Array Iteration in TypeScript
// Array iteration means looping through elements to perform operations. TypeScript provides multiple ways to iterate over arrays.

// 1️⃣ Using for Loop (Traditional Method)
// ✅ Best for when you need index-based access.
let numbers1 = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

// 2️⃣ Using forEach() Method
// ✅ Executes a function for each element.i.e Calls a function on each element
console.log("Using forEach loop");
numbers1.forEach((num) => {
  console.log(num * num);
});

// 3️⃣ Using for...of Loop (Modern and Cleaner)
// ✅ Best for iterating directly over elements.
console.log("using for.. of loop");
for (let num of numbers1) {
  console.log(num);
}

// 4️⃣ Using map() Method (Returns a New Array)
// ✅ Used when you need to modify each element.
console.log("Using map method");
let numbers2 = [1, 2, 3];
let squared = numbers2.map((num) => num * num);
console.log(squared);

// 5️⃣ every() – Check If All Elements Match Condition
// ✅ Returns true if all elements satisfy the condition.
let numbers3 = [10, 20, 30];
console.log(numbers3.every((num) => num > 5)); // Output: true
console.log(numbers3.every((num) => num > 15)); // Output: false

// 6️⃣ some() – Check If At Least One Element Matches
// ✅ Returns true if at least one element meets condition.
console.log(numbers3.some((num) => num > 25)); // Output: true
console.log(numbers3.some((num) => num > 50)); // Output: false

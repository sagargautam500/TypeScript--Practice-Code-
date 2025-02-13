// A Tuple in TypeScript is like an array, but each element has a fixed type and position.
// Think of a tuple as a box with multiple compartments, where each compartment holds a specific type of value.

// 1️⃣ What is a Tuple?
// A tuple is an ordered collection of values. Unlike arrays, the types of the values can be different and you can specify the exact number of elements in a tuple.
let Person: [string, number] = ["John", 25];
console.log(Person); // Output: ["John", 25]
// Tuple definition: [string, number]
// 🔹 The first value is a string (e.g., "John"), and the second is a number (e.g., 25).


// 2️⃣ Key Differences Between Arrays and Tuples
// Arrays can only store values of the same type (e.g., all numbers or all strings).
// Tuples can store different types of values and you can define their types explicitly.

// Array Example (Same Type)
let Numbers: number[] = [1, 2, 3];
let Arr: string[] = ["Sagar", "Gautam"]; // ✅ Only strings allowed

// Tuple Example (Different Types)
let Person1: [string, number] = ["Alice", 30];


// 3️⃣ Tuple with Multiple Types
// You can store different types of data in a single tuple.
type carDetals=[ string, number, boolean]

let Car:carDetals= ["Toyota", 2022, true];
console.log(Car[0]); // Output: "Toyota"
console.log(Car[1]); // Output: 2022
console.log(Car[2]); // Output: true
// ✔️ First value must be a string (car name).
// ✔️ Second value must be a number (year).
// ✔️ Third value must be a boolean (is it available?).



// 3️⃣ Tuple with Fixed Length using readonly
// Tuples allow you to set a fixed length for the collection of values. Once you define the types and length, you can't add extra elements.
let userInfo: readonly[string, number] = ["Sagar", 22];
// userInfo.push(30); // ❌ can not add or modify because it is readonly
console.log(userInfo)
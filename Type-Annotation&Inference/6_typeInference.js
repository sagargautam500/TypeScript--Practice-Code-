"use strict";
// Type inference is TypeScript's ability to automatically determine the type of a variable based on its value without explicitly specifying it.
// 📌 Simply put: TypeScript guesses the type for you! 🚀
// 1️⃣ Basic Example: Inferred Types
// When you declare a variable and assign a value, TypeScript automatically infers its type.
let messages = "Hello, TypeScript!"; // TypeScript infers: string
// messages = 42; // ❌ Error: Type 'number' is not assignable to type 'string'
// ✅ Since "Hello, TypeScript!" is a string, TypeScript infers message as a string, so you cannot assign a number later.
// 2️⃣ Function Return Type Inference
// TypeScript infers the return type of a function based on the return value.
function add1(a, b) {
    return a + b; // TypeScript infers: number
}
let result = add1(5, 10); // `result` is inferred as `number`
console.log(result);
// 3️⃣ Inference with Arrays & Objects
let numbers = [1, 2, 3, 4]; // TypeScript infers: number[]
numbers.push(5); // ✅ Allowed
// numbers.push("hello"); // ❌ Error: Type 'string' is not assignable to type 'number'
console.log(numbers);
let user = { name: "Sagar", age: 22 }; // TypeScript infers: { name: string; age: number }
// 4️⃣ Contextual Type Inference
// When a function is used in an expected type context, TypeScript infers the type based on the surrounding code.
const printMessage = (message = "Hello") => {
    console.log(message.toUpperCase()); // TypeScript infers: string
};
printMessage();
// 5️⃣ Best Practice: Let TypeScript Infer Where Possible
// ✔️Let TypeScript infer types automatically when possible.
let count = 10; // ✅ TypeScript infers `number`
// ❌ Avoid unnecessary type annotations.
// let count: number = 10;  // ❌ Unnecessary, TypeScript already knows it's a `number`
// 📝 Summary: Why Use Type Inference?
// ✅ Less typing – No need to write explicit types everywhere.
// ✅ More readable code – Code remains clean and simple.
// ✅ Type safety – TypeScript still prevents incorrect assignments.

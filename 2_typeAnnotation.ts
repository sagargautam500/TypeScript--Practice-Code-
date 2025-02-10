// 🔍 What is Type Annotation in TypeScript?
// Type Annotation is when you explicitly define the type of a variable, function parameter, or return value in TypeScript.
// 📌 It helps TypeScript know exactly what type a value should be instead of relying on inference.

// 1️⃣ Basic Example of Type Annotation
// Instead of letting TypeScript infer the type, you explicitly specify it using : type.
let username: string = "Sagar";
let age: number = 22;
let isDeveloper: boolean = true;
// ✅ Here:
// username is explicitly defined as a string.
// age is a number.
// isDeveloper is a boolean.

// 2️⃣ Type Annotation in Function Parameters & Return Type
// You can annotate function parameters and return types to ensure type safety.
function add(a: number, b: number): number {
  return a + b; // Ensures the return value is a number
}
let result1: number = add(5, 10);  // ✅ No type errors
console.log(result1);

// 3️⃣ Type Annotation in Arrays & Objects
// (a) Arrays
let number: number[] = [1, 2, 3, 4, 5];
// number.push("hello"); // ❌ Error: Type 'string' is not assignable to type 'number'
// (b) Objects
let users: { name: string; age: number } = {
  name: "Sagar",
  age: 22
};


//Summary:::
// feature	        Type Annotation Example
// Variables	      let count: number = 10;
// Functions	      function greet(name: string): void {}
// Arrays	          let arr: string[] = ["A", "B"];
// Objects	        let user: { name: string; age: number };
// Union Types	    `let id: number

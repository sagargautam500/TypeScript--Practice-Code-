// Generics allow you to create reusable and flexible functions, classes, or types that work with any data type.
// Think of Generics as "placeholders for types".

// 📌 When to Use Generics?
// ✅ When creating reusable functions, classes, or interfaces.
// ✅ When working with different data types dynamically.
// ✅ When handling API responses.

// 1️⃣ Why Use Generics?
// Without generics, we have to write separate functions for different types.

// ❌ Problem: Without Generics
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}

console.log(getString("Hello")); // ✅ "Hello"
console.log(getNumber(100));     // ✅ 100
// ❌ Issue: We have to create a new function for every type.



// 2️⃣ Solution: Using Generics (<T>)
// Generics allow one function to work with multiple types.
function getData<T>(value: T): T {
  return value;
}

console.log(getData<string>("Hello")); // ✅ "Hello"
console.log(getData<number>(100));     // ✅ 100
console.log(getData<boolean>(true));   // ✅ true
// ✔️ T acts like a placeholder for the type (it can be string, number, boolean, etc.).
// ✔️ Now, we don't need separate functions for each type.


// 3️⃣ Generic Function with Inferred Type
// You don't have to specify the type manually. TypeScript automatically detects it.
function identity<T>(value: T): T {
  return value;
}

console.log(identity("TypeScript")); // ✅ TypeScript (string)
console.log(identity(50));           // ✅ 50 (number)
console.log(identity(true));         // ✅ true (boolean)
// ✔️ TypeScript detects the type from the argument.



// 4️⃣ Generic Array Example
// Generics can also work with arrays.
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3]));       // ✅ 1 (number)
console.log(getFirstElement<string>(["A", "B", "C"])); // ✅ "A" (string)
// ✔️ The function works for any type of array.

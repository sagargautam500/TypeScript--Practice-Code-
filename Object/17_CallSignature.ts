// 📌 Call Signature in TypeScript
// A call signature in TypeScript defines the structure of a function inside an object, interface, or type alias. It specifies the parameters and return type without implementing the function itself.

// 1️⃣ Basic Call Signature
// A call signature describes how a function can be called.
// type Add ={(a: number, b: number) : number};
type Add =(a: number, b: number) => number;
const add2: Add = (x, y) => x + y;
console.log(add2(5, 10)); // Output: 15
// Here, Add is a function type with a call signature (a: number, b: number) => number.
// 🔹 The function add must match this signature.

// 2️⃣ Call Signature in Interfaces
// Call signatures are useful inside interfaces when defining function properties.
interface Multiply {
  (a: number, b: number): number;
}
const multiply1: Multiply = (x, y) => x * y;
console.log(multiply1(5, 3)); // Output: 15
// The interface Multiply acts like a function blueprint.

// 3️⃣ Call Signature with Optional & Default Parameters
type Greet = (name: string, greeting?: string) => string;
const sayHello: Greet = (name, greeting = "Hello") => `${greeting}, ${name}!`;
console.log(sayHello("Sagar"));       // Output: Hello, Sagar!
console.log(sayHello("Sagar", "Hi")); // Output: Hi, Sagar!
// The second parameter greeting is optional (?), with a default value "Hello".

// 4️⃣ Call Signature with Function Overloading
// Call signatures also support function overloading.
// Define overload signatures
function convert(value: string): number;
function convert(value: number): string;
// Implement the function
function convert(value: string | number): string | number {
    return typeof value === "string" ? parseInt(value) : value.toString();
}
// Call the function
console.log(convert("100")); // Output: 100 (number)
console.log(convert(100));   // Output: "100" (string)

// ✅ Alternative: Using Interface with a Union Return Type
// If you want to use an interface, you need to use a generic or an explicit union return type.
interface Converter {
  (value: string | number): string | number;
}
const convert1: Converter = (value) =>
  typeof value === "string" ? parseInt(value) : value.toString();
console.log(convert1("200")); // Output: 200
console.log(convert1(200));   // Output: "200"
// Here, we define a function type that accepts string | number and returns string | number.



// 5️⃣ Call Signature Inside Objects
type MathOperations = {  //Defines multiple function properties inside an object.
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};
const math: MathOperations = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y
};
console.log(math.add(10, 5));       // Output: 15
console.log(math.subtract(10, 5));  // Output: 5


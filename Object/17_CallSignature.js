"use strict";
// 📌 Call Signature in TypeScript
// A call signature in TypeScript defines the structure of a function inside an object, interface, or type alias. It specifies the parameters and return type without implementing the function itself.
const add2 = (x, y) => x + y;
console.log(add2(5, 10)); // Output: 15
const multiply1 = (x, y) => x * y;
console.log(multiply1(5, 3)); // Output: 15
const sayHello = (name, greeting = "Hello") => `${greeting}, ${name}!`;
console.log(sayHello("Sagar")); // Output: Hello, Sagar!
console.log(sayHello("Sagar", "Hi")); // Output: Hi, Sagar!
// Implement the function
function convert(value) {
    return typeof value === "string" ? parseInt(value) : value.toString();
}
// Call the function
console.log(convert("100")); // Output: 100 (number)
console.log(convert(100)); // Output: "100" (string)
const convert1 = (value) => typeof value === "string" ? parseInt(value) : value.toString();
console.log(convert1("200")); // Output: 200
console.log(convert1(200)); // Output: "200"
const math = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y
};
console.log(math.add(10, 5)); // Output: 15
console.log(math.subtract(10, 5)); // Output: 5

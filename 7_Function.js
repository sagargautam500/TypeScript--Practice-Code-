"use strict";
// 🔍 Functions in TypeScript
// A function in TypeScript is a reusable block of code that performs a specific task. It can take parameters, return values, and help keep code organized and efficient.
// 1️⃣ Basic Function Syntax
// In TypeScript, functions are similar to JavaScript but allow type annotations for parameters and return values.
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Sagar")); // Output: Hello, Sagar!
// 2️⃣ Function with Multiple Parameters
function add3(a, b) {
    //a and b are parameter called:
    return a + b;
}
console.log(add3(5, 10)); // Output: 15           //5 and 10 are arguments called:
// 3️⃣ Optional and Default Parameters
// (a) Optional Parameter (?)::::::
// You can make parameters optional using ?.
function greet1(name, age) {
    return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}.`;
}
console.log(greet1("Sagar")); // Output: Hello, Sagar.
console.log(greet1("Sagar", 22)); // Output: Hello, Sagar. You are 22 years old.
// ✅ The age parameter is optional, so the function works with or without it.
// (b) Default Parameter
// You can assign a default value to a parameter.
function greet2(name = "Guest") {
    //✅ If no argument is passed, "Guest" is used by default.
    return `Hello, ${name}!`;
}
console.log(greet2()); // Output: Hello, Guest!
console.log(greet2("Sagar")); // Output: Hello, Sagar!
// 4️⃣ Function with Return Type void
// If a function does not return anything, use void.
function logMessage(message) {
    console.log(message);
}
logMessage("TypeScript is awesome!"); // Output: TypeScript is awesome!
// ✅ The function just performs an action (logs the message) and does not return anything.
// 5️⃣ Arrow Functions (=>)
// TypeScript supports arrow functions, which are shorter and often used in modern JavaScript.
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Output: 20
function getValue(value) {
    return value;
}
console.log(getValue("Hello")); // Output: Hello
console.log(getValue(123)); // Output: 123
// 7.🔍 Function Overriding in TypeScript
// Function Overriding occurs when a subclass (child class) provides a different implementation of a method that is already defined in its parent class.
// 📌 Key Points:
// ✔️ The method in the child class must have the same name and parameters as the one in the parent class.
// ✔️ The child class can modify the method's behavior while keeping the same function signature.
// ✔️ The super keyword is used to call the parent class method inside the overridden method.
// 1️⃣ Basic Example of Function Overriding
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark! Bark! 🐶"); // Overriding the parent method
    }
}
let myPet = new Dog();
myPet.makeSound(); // Output: Bark! Bark! 🐶
// ✅ Here, Dog overrides the makeSound() method from Animal. Instead of "Some generic animal sound", it prints "Bark! Bark! 🐶".
//Some Practice codes::
//Palindrome check:
const isPalindrome = (palin) => {
    let reversePalin = palin.split("").reverse().join("");
    return palin == reversePalin;
};
console.log(isPalindrome("12321"));
//calculate average valuse of those number which takes parameter in array form::
// array.reduce((accumulator, currentValue) => (
//   // operation
// ), initialValue);
let arr = [1, 2, 6, 4, 5];
const calculateAvg = (numbers) => {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    // let sum = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //   sum = sum + numbers[i];
    // }
    return sum / numbers.length;
};
console.log("Average value=", calculateAvg(arr));
//Find maximu value of an array which takes parameter in array form::
const maxValue = (numbers) => {
    let max = numbers.reduce((acc, num) => (acc > num ? acc : (acc = num)), 0);
    return max;
};
console.log(maxValue(arr));

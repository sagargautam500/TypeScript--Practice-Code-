"use strict";
// In TypeScript, types and interfaces are both used to define the shape of an object, but they have key differences in usage.
// ✅ Interfaces are best for defining object shapes and extending classes.
// ✅ Types are more flexible and can be used for union types, function types, and primitives.
const user15 = {
    name: "Sagar",
    age: 22,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};
user15.greet(); // ✅ Output: Hello, my name is Sagar
const user16 = {
    name: "Rahul",
    age: 25,
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    },
};
user16.greet(); // ✅ Output: Hi, I'm Rahul
const pet = {
    name: "Max",
    breed: "Labrador",
};
const pet1 = {
    name: "Rocky",
    breed: "German Shepherd",
};
// ✔️ & operator merges Animal with Dog.

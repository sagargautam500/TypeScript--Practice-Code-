"use strict";
// An object in TypeScript is a collection of key-value pairs, where keys are strings (or symbols), and values can be any data type, including other objects, arrays, or functions.
// 1️⃣ Creating an Object
// (a) Using Object Literal {}.........................................
// ✅ This is the most common way to create objects.
let person = {
    name: "SagarGtm",
    age: 22,
    isDeveloper: true,
};
console.log(person.name); // Output: SagarGtm
// ✅ 1. Using Explicit Object Type
// You can directly annotate an object with its expected properties:
let person1 = {
    name: "Sagar",
    age: 22,
    isAdmin: false,
};
console.log(person1.name); // Output: Sagar
let person2 = {
    name: "Sagar",
    age: 22,
    isAdmin: false,
};
let person3 = {
    name: "John",
    age: 25,
    isAdmin: true,
};
console.log(person3);
let user3 = { name: "Alice", age: 20, isAdmin: false };
console.log(user3);
// (b) Using Object() Constructor..............................................................
// ✅ You can create an empty object and add properties dynamically.
let user1 = new Object();
user1.name = "Sagar";
user1.age = 22;
console.log(user1); // Output: { name: 'Sagar', age: 22 }
//(c) Using Class:object oriented programming:
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let user2 = new User("SagarGautam", 22);
console.log(user2);
// 2️⃣ Accessing Object Properties
// You can access properties using dot notation (.) or bracket notation ([]).
let car = { brand: "Toyota", model: "Corolla" };
console.log(car.brand); // Dot notation - Output: Toyota
console.log(car["model"]); // Bracket notation - Output: Corolla
// Use bracket notation when property names are dynamic or invalid identifiers.
let dynamicKey = "color";
let car2 = { brand: "Honda", [dynamicKey]: "Red" };
console.log(car2["color"]); // Output: Red

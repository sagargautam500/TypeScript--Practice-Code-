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
let person1: { name: string; age: number; isAdmin: boolean } = {
  name: "Sagar",
  age: 22,
  isAdmin: false,
};
console.log(person1.name); // Output: Sagar

// ✅ 2. Using Type Alias (type)
// A type alias allows you to reuse the same object type multiple times.
type pers = {
  name: string;
  age: number;
  isAdmin: boolean;
};
let person2: pers = {
  name: "Sagar",
  age: 22,
  isAdmin: false,
};
let person3: pers = {
  name: "John",
  age: 25,
  isAdmin: true,
};
console.log(person3);

// ✅ 3. Using Interface (interface)
// An interface is similar to type, but it is more powerful because it supports inheritance.
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}
let user3: User = { name: "Alice", age: 20, isAdmin: false };
console.log(user3)


// (b) Using Object() Constructor..............................................................
// ✅ You can create an empty object and add properties dynamically.
let user1 = new Object() as { name: string; age: number };
user1.name = "Sagar";
user1.age = 22;
console.log(user1); // Output: { name: 'Sagar', age: 22 }

//(c) Using Class:object oriented programming:
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
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



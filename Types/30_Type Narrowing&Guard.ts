// 1️⃣ What is Type Narrowing?(Type Guard )
// Type narrowing is the process of refining a broader type (like string | number) to a more specific type within a certain scope.
// 👉 TypeScript "narrows" down the type based on runtime checks, so you can safely access properties or methods of the refined type.

// 1️⃣ What is a Type Guard?
// A Type Guard is a function or condition that narrow downs a variable's type inside a code block.
// 👉 It helps TypeScript "understand" what type a variable has, so you can access its properties safely.
// Type Guards (A Way to Narrow Types)
// Type Guards help TypeScript narrow types explicitly using methods like:
// 1️⃣ typeof
// 2️⃣ instanceof
// 3️⃣ in
// 4️⃣ Custom Type Guards (is)

// 📌 Type Narrowing vs. Type Guards in TypeScript
// ✅ Short Answer:
// Type Guards are a way to achieve Type Narrowing.
// ✅ In Detail:
// Type Narrowing: The general process of refining a broader type (string | number) into a more specific type.
// Type Guards: Specific techniques (like typeof, instanceof, etc.) used to perform type narrowing.

// 📌 Conclusion
// Feature	       Type Narrowing	                                     Type Guard
// Definition	     General concept of making a type more specific	     A technique used to achieve type narrowing
// How It Works	   Automatically applied in conditions (if, switch)	   Requires explicit methods like typeof, instanceof, in, or is
// Example	       if (typeof value === "string")	                     function isDog(pet): pet is Dog

// 🎯 Summary
// ✅ Type Narrowing makes TypeScript smarter by refining types inside conditional blocks.
// ✅ Methods to narrow types 
// typeof → for primitives (e.g., string | number).
// instanceof → for class-based objects.
// in → for checking object properties.
// Type predicates (is) → for custom type guards.=>checking type alies or other and retrurn true or false


// 2️⃣ Example: Type Narrowing in Action
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(`String length: ${value.length}`); // ✅ Safe, because value is now a string
  } else {
    console.log(`Number value: ${value}`); // ✅ Safe, because value is now a number
  }
}

printLength("Hello"); // ✅ Output: String length: 5
printLength(100);     // ✅ Output: Number value: 100
// ✔️ typeof value === "string" narrows the type to string, allowing value.length.
// ✔️ else block ensures value is a number.



// 3️⃣ Different Ways to Perform Type Narrowing
// (a) Using typeof Operator........
// ✔️ Used to check primitive types (string, number, boolean, etc.).
function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // ✅ Allowed because it's now a string
  } else {
    console.log(value.toFixed(2)); // ✅ Allowed because it's now a number
  }
}

processValue("hello"); // ✅ Output: HELLO
processValue(10.123);  // ✅ Output: 10.12


// (b) Using instanceof Operator............
// ✔️ Used to check if an object is an instance of a class.
class Car1 {
  drive() {
    console.log("Driving a car...");
  }
}

class Bike {
  ride() {
    console.log("Riding a bike...");
  }
}

function operateVehicle(vehicle: Car1 | Bike) {
  if (vehicle instanceof Car1) {
    vehicle.drive(); // ✅ TypeScript knows it's a Car
  } else {
    vehicle.ride(); // ✅ TypeScript knows it's a Bike
  }
}

const myCar = new Car1();
const myBike = new Bike();

operateVehicle(myCar);  // ✅ Output: Driving a car...
operateVehicle(myBike); // ✅ Output: Riding a bike...
// ✔️ vehicle instanceof Car ensures safe access to drive()


// (c) Using in Operator.........................
// ✔️ Used to check if an object has a property.
type User23 = { name: string; email: string };
type Admin = { name: string; permissions: string[] };

function getUserInfo(person: User23 | Admin) {
  if ("email" in person) {
    console.log(`User Email: ${person.email}`); // ✅ Safe
  } else {
    console.log(`Admin Permissions: ${person.permissions.join(", ")}`); // ✅ Safe
  }
}

const user23: User23 = { name: "Sagar", email: "sagar@example.com" };
const admin: Admin = { name: "Admin", permissions: ["Manage Users", "Edit Content"] };

getUserInfo(user23);  // ✅ Output: User Email: sagar@example.com
getUserInfo(admin); // ✅ Output: Admin Permissions: Manage Users, Edit Content
// ✔️ "email" in person ensures that person is of type User.


// (d) Using Type Predicates (is)
// ✔️ Custom function to check type and return true or false.
type Dog3 = { breed: string };
type Cat3 = { color: string };

function isDog(pet: Dog3 | Cat3): pet is Dog3 {
  return (pet as Dog3).breed !== undefined;
}
// ✔️ The function takes a parameter pet which can be either Dog or Cat.
// ✔️ The return type pet is Dog means this function is a Type Guard.
// ✔️ Inside the function:
// (pet as Dog).breed forces TypeScript to treat pet as a Dog.
// !== undefined checks if the breed property exists (only Dog has breed).
// If breed exists → It’s a Dog (true).
// If breed doesn’t exist → It’s a Cat (false).

function describePet(pet: Dog3 | Cat3) {
  if (isDog(pet)) {
    console.log(`Dog Breed: ${pet.breed}`); // ✅ Safe because TypeScript now knows `pet` is a Dog
  } else {
    console.log(`Cat Color: ${pet.color}`); // ✅ Safe because TypeScript now knows `pet` is a Cat
  }
}

const myDog3: Dog3 = { breed: "Labrador" };
const myCat3: Cat3 = { color: "Black" };

describePet(myDog3); // ✅ Output: Dog Breed: Labrador
describePet(myCat3); // ✅ Output: Cat Color: Black
// ✔️ isDog(pet) ensures type safety before accessing breed.
// ✅ isDog(pet: Dog | Cat): pet is Dog is a custom Type Guard function.
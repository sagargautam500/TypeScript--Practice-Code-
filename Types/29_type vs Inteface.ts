// In TypeScript, types and interfaces are both used to define the shape of an object, but they have key differences in usage.
// ✅ Interfaces are best for defining object shapes and extending classes.
// ✅ Types are more flexible and can be used for union types, function types, and primitives.

// 4️⃣ Differences Between Type and Interface
// Feature                       	Interface	                                            Type
// Extensibility	                ✅ extends (can be merged)	and (|) not used          ✅ & (Intersection) and also used union(|)
// Function Types	                ❌ Cannot define directly	                          ✅ Can define directly
// Declaration Merging	          ✅ Allowed & same interface name allow	              ❌ Not allowed & same type name not allow
// Best Use Case	                Object shapes and class contracts	                    Union types, function types, primitives

// 5️⃣ When to Use Interface vs Type?
// ✔️ Use interface when:
// You need OOP-style structures.
// You want to extend and merge easily.
// You are working with class-based inheritance.

// ✔️ Use type when:
// You need union (|) or intersection (&) types.
// You want to define function types, primitives, or complex types.
// You don’t need to extend it later.

// 1️⃣ Interface in TypeScript
// Used to define object structures.
// Supports declaration merging (can be extended multiple times).
// Works well with classes and OOP concepts.
// ✅ Example: Using Interface
interface Person111 {
  name: string;
  age: number;
  greet(): void;
}

const user15: Person111 = {
  name: "Sagar",
  age: 22,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

user15.greet(); // ✅ Output: Hello, my name is Sagar
// ✔️ Person defines an object structure.
// ✔️ greet() function is implemented inside user.


// 2️⃣ Type in TypeScript
// Can define objects, unions, functions, primitives, etc.
// Cannot be extended like interfaces but can use intersections (&).
// ✅ Example: Using Type
type Person112 = {
  name: string;
  age: number;
  greet(): void;
};

const user16: Person112 = {
  name: "Rahul",
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

user16.greet(); // ✅ Output: Hi, I'm Rahul
// ✔️ Similar to interface, but it's a type alias.


// 3️⃣ Extending Interfaces vs. Types
// Interfaces support extension using extends.
// Types use intersections (&).

// ✅ Extending an Interface
interface Animal20 {
  name: string;
}

interface Dog22 extends Animal20 {
  breed: string;
}

const pet: Dog22 = {
  name: "Max",
  breed: "Labrador",
};
// ✔️ Dog extends Animal, adding breed property.


// ✅ Extending a Type (Intersection)
type Animal21 = {
  name: string;
};

type Dog21 = Animal21 & {
  breed: string;
};

const pet1: Dog21 = {
  name: "Rocky",
  breed: "German Shepherd",
};
// ✔️ & operator merges Animal with Dog.
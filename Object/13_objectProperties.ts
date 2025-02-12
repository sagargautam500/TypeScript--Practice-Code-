// 2️⃣ Object Properties in TypeScript
// ✅ Optional Properties (?)
type info = {
  name: string;
  age?: number; // age is optional, so it’s not required in the object.
};
let user4: info = { name: "Sagar" }; // ✅ No error
user4.age=23

// ✅ Readonly Properties (readonly)
type info2 = {
  readonly id: number; // Use readonly for values that shouldn’t be modified after initialization.
  name: string;
};
let user5: info2 = { id: 101, name: "Sagar" };
user5.name = "John"; // ✅ Allowed
// user5.id = 102; // ❌ Error: Cannot assign to 'id' because it is a read-only property

// ✅ Index Signatures ([key: string]: any)
// Allows dynamic properties.
type info3 = {
  name: string;
  [key: string]: any;
};
let user6: info3 = { name: "Sagar", age: 22, country: "Nepal" };
user6.city="Kathmandu"
user6.num=981834725
console.log(user6); // ✅ No error


// ✅ Object.assign() - Copy Properties
// Merges source properties into target.
let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2, c: 3 }

// ✅ Object.freeze() - Prevent Modifications
// Prevents adding, modifying, or deleting properties.
let personn:{name:string,[key:string]:any}= { name: "Sagar" };
Object.freeze(personn);
// personn.name = "John"; // ❌ Error: Cannot assign to 'name' because object is frozen
// personn.age=23;  //❌ Error: Cannot add age 
console.log(personn);

// ✅ Object.seal() - Prevent Adding/Deleting Properties
// 🔹 Allows modifications but prevents adding/removing properties.
let personn1:{name:string,[key:string]:any} = { name: "Sagar" };
Object.seal(personn1);
personn1.name = "John"; // ✅ Allowed
// personn1.age = 22; // ❌ Error: Cannot add new properties
console.log(personn1)

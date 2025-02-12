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


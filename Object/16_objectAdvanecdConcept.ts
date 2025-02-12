// 6️⃣ Advanced Object Concepts
// ✅ Extending Objects (extends in Interface)
interface Person {
  name: string;
  age: number;
}
interface Employee extends Person { //🔹 Employee inherits Person properties.
  salary: number;
}
let emp: Employee = { name: "Sagar", age: 22, salary: 50000 };
console.log(emp)


// ✅ Merging Objects (& in Type Alias)::🔹 Both extends and & achieve similar results.
type Person1= { name: string; age: number; };
type Employee1 = Person1 & { salary: number; };
let emp1: Employee = { name: "Sagar", age: 22, salary: 50000 };
console.log(emp1)


// ✅ Object Destructuring
let emp3 = { namee: "Sagar", agee: 22 };
let { namee, agee }: { namee: string; agee: number } = emp3;
console.log(namee); // Output: Sagar


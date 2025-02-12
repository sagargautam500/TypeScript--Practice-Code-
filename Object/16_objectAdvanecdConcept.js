"use strict";
let emp = { name: "Sagar", age: 22, salary: 50000 };
console.log(emp);
let emp1 = { name: "Sagar", age: 22, salary: 50000 };
console.log(emp1);
// ✅ Object Destructuring
let emp3 = { namee: "Sagar", agee: 22 };
let { namee, agee } = emp3;
console.log(namee); // Output: Sagar

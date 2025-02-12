"use strict";
// 3️⃣ Modifying an Object
// (a) Adding New Properties
let student = { name: "John" };
student.age = 20; // ✅ No error
console.log(student);
// (b) Updating an Existing Property
student.name = "Mike";
console.log(student.name); // Output: Mike
// (c) Deleting a Property
delete student.age;
console.log(student); // Output: { name: "Mike" }

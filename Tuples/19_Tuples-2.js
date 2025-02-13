"use strict";
// 4️⃣ Tuple with Function Return Type
// A function can return a tuple.
function getStudent() {
    return ["Sagar", 22];
}
let Student = getStudent();
console.log(Student[0]); // Output: "Sagar"
console.log(Student[1]); // Output: 22
// 5️⃣ Optional Elements in Tuples
// Tuples can also have optional elements, which means some elements may not be required.
let userDetails = ["John", 25];
console.log(userDetails); // Output: ["John", 25]
userDetails = ["Jane", 30, "USA"];
console.log(userDetails); // Output: ["Jane", 30, "USA"]
let Emp = [101, "Sagar", 50000];
console.log(Emp[0]); // Output: 101
console.log(Emp[1]); // Output: "Sagar"
console.log(Emp[2]); // Output: 50000
// 7️⃣ Rest Parameters in Tuples
// You can also use the rest parameter in a tuple to accept multiple elements of a specific type at the end.
let Student1 = ["Alex", 80, 85, 90];
console.log(Student1); // Output: ["Alex", 80, 85, 90]
// 📌 When to Use Tuples?
// ✅ When you need a fixed number of values in a specific order.
// ✅ When you need different types in a single collection.
// ✅ When returning multiple values from a function.

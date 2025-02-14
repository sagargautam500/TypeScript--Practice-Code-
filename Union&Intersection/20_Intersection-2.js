"use strict";
// 2️⃣ Intersection Types (&)
// An intersection type combines multiple types into one type.
// It means "must satisfy both types."
let worker = {
    name: "Sagar",
    employeeId: 101
};
console.log(worker); // Output: { name: "Sagar", employeeId: 101 }
let userr = {
    name: "Sagar",
    age: 22,
    city: "Bhaktapur",
    country: "Nepal"
};
console.log(userr); // Output: { name: "Sagar", age: 22, city: "Bhaktapur", country: "Nepal" }
// ✔️ User must include both BasicInfo and Address.
// 4️⃣ When to Use What?
// ✅ Use Intersection (&) when:
// Intersection (&) combines multiple types together.
// You need to combine multiple objects into one.
// Example: A user has basic info + address + contact details.
// Use Union for flexibility, and Intersection for strict type enforcement.

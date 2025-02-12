"use strict";
let user4 = { name: "Sagar" }; // ✅ No error
user4.age = 23;
let user5 = { id: 101, name: "Sagar" };
user5.name = "John"; // ✅ Allowed
let user6 = { name: "Sagar", age: 22, country: "Nepal" };
user6.city = "Kathmandu";
user6.num = 981834725;
console.log(user6); // ✅ No error

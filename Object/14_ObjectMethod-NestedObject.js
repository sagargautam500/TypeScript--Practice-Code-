"use strict";
// 3️⃣ Object Methods in TypeScript..............................................................................
// ✅ Defining Methods Inside an Object
let user7 = {
    name: "Sagar",
    greet() {
        console.log("Hello, " + this.name); // this.name refers to the object’s name property.
    },
};
user7.greet(); // Output: Hello, Sagar
let user8 = {
    name: "SagarGTM",
    greet() {
        console.log("Hello, " + this.name);
    },
};
user8.greet(); // Output: Hello, SagarGTM
let user10 = {
    name: "Sagar",
    age: 22,
    address: {
        city: "Bhaktapur",
        country: "Nepal"
    }
};
console.log(user10.address.city); // Output: Bhaktapur
console.log(user10.address); // Output: {..}

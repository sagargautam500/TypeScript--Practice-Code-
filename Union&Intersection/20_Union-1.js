"use strict";
// 📌 TypeScript: Unions vs. Intersections (With Real-Life Examples)
// In TypeScript, Unions (|) and Intersections (&) are two important ways to combine types.
// 1️⃣ Union Types (|)
// A union type allows a variable to have multiple possible types.
// It means "either one type or another."
// 🛠 Example 1: Variable with Multiple Types
let Data;
Data = "Hello"; // ✅ Allowed
Data = 100; // ✅ Allowed
// Data = true;    // ❌ Error (boolean is not allowed)
// ✔️ data can be either string or number, but not boolean.
// 🛠 Example 2: Function with Union Type
function printId(id) {
    console.log("Your ID is: " + id);
}
printId(101); // ✅ Output: "Your ID is: 101"
printId("A101"); // ✅ Output: "Your ID is: A101"
function makePayment(method) {
    console.log(`Payment made using ${method}`);
}
makePayment("Cash"); // ✅ Allowed
makePayment("CreditCard"); // ✅ Allowed
makePayment("UPI"); // ✅ Allowed
// makePayment("Bitcoin");    // ❌ Error (Not a valid payment method)
// ✔️ The function restricts the user to valid payment methods.
// 4️⃣ When to Use What?
// ✅ Use Union (|) when:
// Union (|) allows either one type or another.
// A variable can have multiple types.
// Example: A function accepts both numbers and strings.

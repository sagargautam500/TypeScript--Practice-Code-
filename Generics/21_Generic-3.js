"use strict";
// 📌 Multiple Type Variables in Generics (TypeScript)
// You can use multiple type variables in Generics to handle different types at the same time.
// 1️⃣ Basic Example: Two Generic Types
// We can define a function that accepts two different types (T and U):
function pair(first, second) {
    return [first, second];
}
// ✅ Example Usage
console.log(pair("Hello", 100)); // Output: ["Hello", 100]
console.log(pair(true, { age: 22 })); // Output: [true, { age: 22 }]
const item1 = { key: "age", value: 22 };
const item2 = { key: 1, value: true };
console.log(item1); // ✅ { key: "age", value: 22 }
console.log(item2); // ✅ { key: 1, value: true }
// ✔️ K and V represent different types for keys and values.
// 3️⃣ Generic Class with Multiple Type Variables
// A class can also have multiple type variables.
class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    getPair() {
        return [this.first, this.second];
    }
}
// ✅ Example Usage
const p1 = new Pair("ID", 123);
console.log(p1.getPair()); // ✅ ["ID", 123]
const p2 = new Pair(true, "Active");
console.log(p2.getPair()); // ✅ [true, "Active"]
const successResponse = {
    data: { name: "Sagar" },
    message: "Success",
};
console.log(successResponse); // ✅ { data: { name: "Sagar" }, message: "Success" }
// ✔️ T is the data type, M is the message type.
// ✔️ It makes the API flexible and type-safe.

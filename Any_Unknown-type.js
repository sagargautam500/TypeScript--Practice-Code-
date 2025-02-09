"use strict";
// The key difference between any and unknown in TypeScript is type safety.
// 1️⃣ any (Unsafe, No Type Checking)
// Allows anything – You can assign any value and use it without restrictions.
// No type safety – It bypasses TypeScript's type checking.
// Not recommended – Can lead to runtime errors.
let value;
value = 42; // ✅ Allowed
value = true; // ✅ Allowed
value = "Hello"; // ✅ Allowed
let str = value; // ✅ No error (but risky)
console.log(str.toUpperCase()); // ❌ Runtime error if `value` is not a string
// 2️⃣ unknown (Safe, Type Checking Required)
// More secure than any – You must check the type before using it.
// Useful for APIs where data type is uncertain.
let data;
data = "World"; // ✅ Allowed
data = 42; // ✅ Allowed
// let str: string = data; // ❌ Error: Type 'unknown' is not assignable to type 'string'
// ✅ Type Checking Required
if (typeof data === "string") {
    let str = data; // ✅ Safe to use
    console.log(str.toUpperCase()); // ✅ Works fine
}
//fetching data example
async function fetchData() {
    let response = await fetch('https://dummyjson.com/products/1');
    let data = response.json;
    return data;
}
// let processData=fetchData();
async function process() {
    let Data = await fetchData();
    return Data;
}
let processData = process();
if (typeof processData === "object") {
    console.log(processData);
}

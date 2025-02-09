// The key difference between any and unknown in TypeScript is type safety.

// 1️⃣ any (Unsafe, No Type Checking)
// Allows anything – You can assign any value and use it without restrictions.
// No type safety – It bypasses TypeScript's type checking.
// Not recommended – Can lead to runtime errors.
let value: any;
value = 42;       // ✅ Allowed
value = true;     // ✅ Allowed
value = "Hello";  // ✅ Allowed
let str: string = value;  // ✅ No error (but risky)
console.log(str.toUpperCase()); // ❌ Runtime error if `value` is not a string


// 2️⃣ unknown (Safe, Type Checking Required)
// More secure than any – You must check the type before using it.
// Useful for APIs where data type is uncertain.
let data: unknown;
data = "World";  // ✅ Allowed
data = 42;       // ✅ Allowed
// let str: string = data; // ❌ Error: Type 'unknown' is not assignable to type 'string'

// ✅ Type Checking Required
if (typeof data === "string") {
    let str: string = data;  // ✅ Safe to use
    console.log(str.toUpperCase());  // ✅ Works fine
}
//fetching data example
async function fetchData():Promise<unknown> {
  let response=await fetch('https://dummyjson.com/products/1');
  let data=response.json;
  return data;
}
let processData=fetchData();
if(typeof processData==="object"){
  console.log(processData);
}

// When to Use?
// ✅ Use unknown when you don't know the exact type but want safety.
// ❌ Avoid any, unless necessary (e.g., migrating old JavaScript code).
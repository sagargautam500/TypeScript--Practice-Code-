// 4️⃣ Object Iteration
// ✅ Using for...in
// Iterates over keys in an object.
let user9 = { name: "Sagar", age: 22 };

for (let key in user9) {
    console.log(`${key}: ${user9[key as keyof typeof user9]}`); //Use keyof typeof user to avoid type errors.
}
// Output:
// name: Sagar
// age: 22

// ✅ Using Object.keys()
console.log(Object.keys(user9)); //🔹 Returns an array of property keys.
// Output: ['name', 'age']

// ✅ Using Object.values()
console.log(Object.values(user9)); // Output: ['Sagar', 22]
// Returns an array of property values.

// ✅ Using Object.entries()
console.log(Object.entries(user9)); //Returns an array of key-value pairs.
// Output: [['name', 'Sagar'], ['age', 22]]

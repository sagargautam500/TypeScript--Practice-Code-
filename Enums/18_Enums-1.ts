// Enums (short for Enumerations) in TypeScript help to store a set of related values under one name. They make your code cleaner and more readable.
// 1️⃣ What is an Enum?
// An enum is like a list of predefined values that you can use instead of regular numbers or strings.

// Example Without Enum (Using Strings)
let role1 = "Admin";
let role2 = "User";
let role3 = "Guest";
// This works, but what if you misspell "Admin" as "Aadmin"?
// 🔹 TypeScript won’t warn you, and your program might break.


// 2️⃣ Using an Enum (Better Way)
// Enums group related values together and prevent mistakes.
enum Role {
  Admin,   // 0
  User,    // 1
  Guest    // 2
}
let myRole: Role = Role.Admin;
console.log(myRole); // Output: 0
// ✔️ Now, you can't make spelling mistakes.
// ✔️ Role.Admin is easier to understand than just "Admin".


// 3️⃣ Custom Number Values in Enums
// By default, TypeScript assigns numbers starting from 0, but you can set your own values.
enum Status {
  Pending = 1,
  InProgress = 2,
  Completed = 3
}
console.log(Status.Pending);    // Output: 1
console.log(Status.Completed);  // Output: 3
// ✔️ Now, Pending is 1, InProgress is 2, and Completed is 3.


// 4️⃣ String Enums
// Instead of numbers, you can use text values.
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
console.log(Colors.Red);   // Output: "RED"
console.log(Colors.Green); // Output: "GREEN"
// Best for categories that should not change, like "Admin", "Editor", etc.


// 4️⃣ Heterogeneous Enums
// Enums can mix numbers and strings, though this is uncommon.
enum MixedEnum {
  Yes = "YES",
  No = 0
}

console.log(MixedEnum.Yes); // Output: "YES"
console.log(MixedEnum.No);  // Output: 0
// 🔹 Avoid mixing types unless necessary, as it reduces clarity.


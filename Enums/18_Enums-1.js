"use strict";
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
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest"; // 2
})(Role || (Role = {}));
let myRole = Role.Admin;
console.log(myRole); // Output: 0
// ✔️ Now, you can't make spelling mistakes.
// ✔️ Role.Admin is easier to understand than just "Admin".
// 3️⃣ Custom Number Values in Enums
// By default, TypeScript assigns numbers starting from 0, but you can set your own values.
var Status;
(function (Status) {
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["InProgress"] = 2] = "InProgress";
    Status[Status["Completed"] = 3] = "Completed";
})(Status || (Status = {}));
console.log(Status.Pending); // Output: 1
console.log(Status.Completed); // Output: 3
// ✔️ Now, Pending is 1, InProgress is 2, and Completed is 3.
// 4️⃣ String Enums
// Instead of numbers, you can use text values.
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Green"] = "GREEN";
    Colors["Blue"] = "BLUE";
})(Colors || (Colors = {}));
console.log(Colors.Red); // Output: "RED"
console.log(Colors.Green); // Output: "GREEN"
// Best for categories that should not change, like "Admin", "Editor", etc.
// 4️⃣ Heterogeneous Enums
// Enums can mix numbers and strings, though this is uncommon.
var MixedEnum;
(function (MixedEnum) {
    MixedEnum["Yes"] = "YES";
    MixedEnum[MixedEnum["No"] = 0] = "No";
})(MixedEnum || (MixedEnum = {}));
console.log(MixedEnum.Yes); // Output: "YES"
console.log(MixedEnum.No); // Output: 0
// 🔹 Avoid mixing types unless necessary, as it reduces clarity.

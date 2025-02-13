"use strict";
// 5️⃣ Enum Type Annotation in Interfaces
// Enums work well with interfaces for structuring object types.
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Pending"] = 0] = "Pending";
    PaymentStatus[PaymentStatus["Completed"] = 1] = "Completed";
    PaymentStatus[PaymentStatus["Failed"] = 2] = "Failed";
})(PaymentStatus || (PaymentStatus = {}));
const myPayment = {
    amount: 500,
    status: PaymentStatus.Completed
};
console.log(myPayment.status); // Output: 1
// 6️⃣ Enum with Computed Values
// Enums can contain computed values, but at least one numeric initializer is required.
var ComputedEnum;
(function (ComputedEnum) {
    ComputedEnum[ComputedEnum["A"] = 10] = "A";
    ComputedEnum[ComputedEnum["B"] = 20] = "B";
    ComputedEnum[ComputedEnum["C"] = 25] = "C"; // 25
})(ComputedEnum || (ComputedEnum = {}));
console.log(ComputedEnum.C); // Output: 25
// The values are computed at compile time.
// 7️⃣ Enum with Union Types
// You can combine enums with union types for stricter type enforcement.
var Light;
(function (Light) {
    Light["Red"] = "RED";
    Light["Green"] = "GREEN";
    Light["Yellow"] = "YELLOW";
})(Light || (Light = {}));
let signal = Light.Green; // ✅ Valid
signal = "Blue"; // ✅ Valid
// signal = "Pink"; // ❌ Error: Type '"Pink"' is not assignable to type 'TrafficLight'.
// 8️⃣ Enum vs Object
// Enums are different from objects because they allow reverse mapping.
const obj = { A: 0, B: 1 };
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["A"] = 0] = "A";
    MyEnum[MyEnum["B"] = 1] = "B";
})(MyEnum || (MyEnum = {}));
console.log(MyEnum.A); // 0
console.log(MyEnum[0]); // "A" (Reverse mapping)
// console.log(obj[0]);     // undefined (Objects do not support reverse mapping)
// 9️⃣ When to Use Enums?
// ✅ When you have a fixed set of values (e.g., "Admin", "User", "Guest").
// ✅ When you want to avoid spelling mistakes in string values.
// ✅ When numbers or names make code easier to read.

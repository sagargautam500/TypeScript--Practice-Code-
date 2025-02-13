// 5️⃣ Enum Type Annotation in Interfaces
// Enums work well with interfaces for structuring object types.
enum PaymentStatus {
  Pending,
  Completed,
  Failed
}

interface Payment {
  amount: number;
  status: PaymentStatus; // Enum type annotation
}

const myPayment: Payment = {
  amount: 500,
  status: PaymentStatus.Completed
};

console.log(myPayment.status); // Output: 1


// 6️⃣ Enum with Computed Values
// Enums can contain computed values, but at least one numeric initializer is required.
enum ComputedEnum {
  A = 10,
  B = A * 2,  // 20
  C = B + 5   // 25
}

console.log(ComputedEnum.C); // Output: 25
// The values are computed at compile time.



// 7️⃣ Enum with Union Types
// You can combine enums with union types for stricter type enforcement.
enum Light {
  Red = "RED",
  Green = "GREEN",
  Yellow = "YELLOW"
}

type trafficLight = Light | "Blue"; // Union type with enum

let signal: trafficLight = Light.Green; // ✅ Valid
signal = "Blue"; // ✅ Valid
// signal = "Pink"; // ❌ Error: Type '"Pink"' is not assignable to type 'TrafficLight'.


// 8️⃣ Enum vs Object
// Enums are different from objects because they allow reverse mapping.
const obj = { A: 0, B: 1 };
enum MyEnum { A, B }

console.log(MyEnum.A);   // 0
console.log(MyEnum[0]);  // "A" (Reverse mapping)
// console.log(obj[0]);     // undefined (Objects do not support reverse mapping)




// 9️⃣ When to Use Enums?
// ✅ When you have a fixed set of values (e.g., "Admin", "User", "Guest").
// ✅ When you want to avoid spelling mistakes in string values.
// ✅ When numbers or names make code easier to read.
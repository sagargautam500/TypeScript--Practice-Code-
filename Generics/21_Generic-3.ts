// 📌 Multiple Type Variables in Generics (TypeScript)
// You can use multiple type variables in Generics to handle different types at the same time.

// 1️⃣ Basic Example: Two Generic Types
// We can define a function that accepts two different types (T and U):
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// ✅ Example Usage
console.log(pair("Hello", 100));     // Output: ["Hello", 100]
console.log(pair(true, { age: 22 })); // Output: [true, { age: 22 }]
// ✔️ T and U allow two different types in a single function.
// ✔️ The function returns a tuple ([T, U]).



// 2️⃣ Generic Interface with Multiple Types
// We can create an interface with multiple type variables.
interface KeyValue<K, V> {
  key: K;
  value: V;
}

const item1: KeyValue<string, number> = { key: "age", value: 22 };
const item2: KeyValue<number, boolean> = { key: 1, value: true };

console.log(item1); // ✅ { key: "age", value: 22 }
console.log(item2); // ✅ { key: 1, value: true }
// ✔️ K and V represent different types for keys and values.


// 3️⃣ Generic Class with Multiple Type Variables
// A class can also have multiple type variables.
class Pair<T, U> {
  private first: T;
  private second: U;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  getPair(): [T, U] {
    return [this.first, this.second];
  }
}

// ✅ Example Usage
const p1 = new Pair<string, number>("ID", 123);
console.log(p1.getPair()); // ✅ ["ID", 123]

const p2 = new Pair<boolean, string>(true, "Active");
console.log(p2.getPair()); // ✅ [true, "Active"]
// ✔️ The class can store two different types.
// ✔️ The getPair method returns a tuple.



// 4️⃣ Real-Life Example: API Response with Multiple Types
// Imagine an API that returns data and a message.
interface ApiResponse1<T, M> {
  data: T;
  message: M;
}

const successResponse: ApiResponse1<{ name: string }, string> = {
  data: { name: "Sagar" },
  message: "Success",
};

console.log(successResponse); // ✅ { data: { name: "Sagar" }, message: "Success" }
// ✔️ T is the data type, M is the message type.
// ✔️ It makes the API flexible and type-safe.
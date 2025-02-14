// 2️⃣ Intersection Types (&)
// An intersection type combines multiple types into one type.
// It means "must satisfy both types."

// 🛠 Example 1: Merging Two Types
type Personn = { name: string };
type Employeee = { employeeId: number };

type Worker1 = Personn & Employeee;

let worker: Worker1 = {
  name: "Sagar",
  employeeId: 101
};

console.log(worker); // Output: { name: "Sagar", employeeId: 101 }
// ✔️ Worker must have both name and employeeId.


// 🛠 Real-Life Example: User Profile
type BasicInfo = { name: string; age: number };
type address = { city: string; country: string };

type Userr = BasicInfo & Address;

let userr: Userr = {
  name: "Sagar",
  age: 22,
  city: "Bhaktapur",
  country: "Nepal"
};

console.log(userr); // Output: { name: "Sagar", age: 22, city: "Bhaktapur", country: "Nepal" }
// ✔️ User must include both BasicInfo and Address.


// 4️⃣ When to Use What?
// ✅ Use Intersection (&) when:
// Intersection (&) combines multiple types together.
// You need to combine multiple objects into one.
// Example: A user has basic info + address + contact details.

// Use Union for flexibility, and Intersection for strict type enforcement.
// In TypeScript, static properties and methods belong to the class itself, not to individual objects. This means:
// ✅ Shared across all instances of the class
// ✅ Called directly on the class, not on an object
// ✅ Useful for utility functions, counters, constants, etc.

// 🎯 When to Use Static Properties & Methods?
// ✅ When data should be shared across all objects (e.g., total users).
// ✅ When you need utility functions (e.g., MathUtils.add()).
// ✅ When no object state is required.


// 1️⃣ Static Properties (static keyword)
// A static property is shared by all instances of a class.
// It does not belong to any single object.
// It is accessed using the class name (not this).
// ✅ Example: Using Static Property
class Counter {
  static count: number = 0; // Static property

  increment() {
    Counter.count++; // Access via class name
  }
}

const c1 = new Counter();
const c2 = new Counter();

c1.increment();
c2.increment();

console.log(Counter.count); // ✅ Output: 2 (shared across instances)
// ✔️ Counter.count is shared among all objects.
// ✔️ It doesn’t belong to c1 or c2 individually, but to Counter.


// 2️⃣ Static Methods (static keyword)
// A static method can be called without creating an object.
// It cannot access non-static properties (since they belong to objects).
// ✅ Example: Using Static Method
class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }
}

// ✅ No need to create an object
console.log(MathUtils.add(10, 5)); // ✅ Output: 15
// ✔️ MathUtils.add() is called directly on the class.
// ✔️ No need to create an instance!


// 3️⃣ Static Properties & Methods Together
// ✅ Example: Using Both
class User12 {
  static totalUsers = 0; // Static property

  constructor(public name: string) {
    User12.totalUsers++; // Increase count when a user is created
    // this.totalUsers=totalUsers+1; //can not acess because totalUsers is static 
  }

  static getUserCount() { // Static method
    return `Total users: ${User12.totalUsers}`;
  }
}

const u1 = new User12("Sagar");
const u2 = new User12("Rahul");

console.log(User12.getUserCount()); // ✅ Output: Total users: 2
// ✔️ User.totalUsers tracks the total number of users.
// ✔️ User.getUserCount() is a utility method to get user count.



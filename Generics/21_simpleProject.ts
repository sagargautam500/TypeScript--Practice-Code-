// Small TypeScript Project: Generic Data Storage System
// This project will create a Generic Storage System that can store and manage any type of data (numbers, strings, objects, etc.).

// 1️⃣ Project Overview
// We'll create:
// A Generic Storage Class (Storage<T>) to store any type of data.
// Methods to add, remove, and get data.
// Test it with numbers, strings, and objects.

// 2️⃣ Code Implementation
// Generic Storage Class
class Storage1<T> {
  private data: T[] = [];

  // Add an item
  add(item: T): void {
    this.data.push(item);
  }

  // Remove an item
  remove(item: T): void {
    this.data = this.data.filter(i => i !== item);
  }

  // Get all items
  getAll(): T[] {
    return this.data;
  }
}

// ✅ Using Storage with Numbers
const numberStorage1 = new Storage1<number>();
numberStorage1.add(10);
numberStorage1.add(20);
numberStorage1.remove(10);
console.log(numberStorage1.getAll()); // Output: [20]

// ✅ Using Storage with Strings
const stringStorage = new Storage1<string>();
stringStorage.add("Apple");
stringStorage.add("Banana");
stringStorage.remove("Apple");
console.log(stringStorage.getAll()); // Output: ["Banana"]

// ✅ Using Storage with Objects
type User1 = { id: number; name: string };
const userStorage = new Storage1<User1>();

userStorage.add({ id: 1, name: "Sagar" });
userStorage.add({ id: 2, name: "John" });
console.log(userStorage.getAll()); 
// Output: [{ id: 1, name: "Sagar" }, { id: 2, name: "John" }]


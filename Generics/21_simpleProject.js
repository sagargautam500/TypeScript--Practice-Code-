"use strict";
// Small TypeScript Project: Generic Data Storage System
// This project will create a Generic Storage System that can store and manage any type of data (numbers, strings, objects, etc.).
// 1️⃣ Project Overview
// We'll create:
// A Generic Storage Class (Storage<T>) to store any type of data.
// Methods to add, remove, and get data.
// Test it with numbers, strings, and objects.
// 2️⃣ Code Implementation
// Generic Storage Class
class Storage1 {
    constructor() {
        this.data = [];
    }
    // Add an item
    add(item) {
        this.data.push(item);
    }
    // Remove an item
    remove(item) {
        this.data = this.data.filter(i => i !== item);
    }
    // Get all items
    getAll() {
        return this.data;
    }
}
// ✅ Using Storage with Numbers
const numberStorage1 = new Storage1();
numberStorage1.add(10);
numberStorage1.add(20);
numberStorage1.remove(10);
console.log(numberStorage1.getAll()); // Output: [20]
// ✅ Using Storage with Strings
const stringStorage = new Storage1();
stringStorage.add("Apple");
stringStorage.add("Banana");
stringStorage.remove("Apple");
console.log(stringStorage.getAll()); // Output: ["Banana"]
const userStorage = new Storage1();
userStorage.add({ id: 1, name: "Sagar" });
userStorage.add({ id: 2, name: "John" });
console.log(userStorage.getAll());
// Output: [{ id: 1, name: "Sagar" }, { id: 2, name: "John" }]

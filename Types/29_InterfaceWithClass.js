"use strict";
// 📌 Implementing Multiple Interfaces in TypeScript (with Class Example)
// In TypeScript, a class can implement multiple interfaces, ensuring that it follows multiple sets of rules.
// Class implementing multiple interfaces
class Document1 {
    title;
    constructor(title) {
        this.title = title;
    }
    print() {
        console.log(`Printing document: ${this.title}`);
    }
    log() {
        console.log(`Logging document: ${this.title}`);
    }
}
// Creating an instance
const myDoc = new Document1("TypeScript Guide");
myDoc.print(); // ✅ Output: Printing document: TypeScript Guide
myDoc.log(); // ✅ Output: Logging document: TypeScript Guide
// Class implementing multiple interfaces
class Employee50 {
    name;
    age;
    job;
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    work() {
        console.log(`${this.name} is working as a ${this.job}`);
    }
}
// Creating an instance
const emp50 = new Employee50("Sagar", 22, "Software Developer");
console.log(emp50.name); // ✅ Output: Sagar
console.log(emp50.age); // ✅ Output: 22
emp50.work(); // ✅ Output: Sagar is working as a Software Developer
// ✔️ Employee implements both Workable and Person.
// ✔️ It inherits name and age from Person and work() from Workable.

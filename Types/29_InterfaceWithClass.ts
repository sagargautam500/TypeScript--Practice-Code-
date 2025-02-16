// 📌 Implementing Multiple Interfaces in TypeScript (with Class Example)
// In TypeScript, a class can implement multiple interfaces, ensuring that it follows multiple sets of rules.

// 1️⃣ How to Implement Multiple Interfaces?
// Use the implements keyword.
// A class must provide implementations for all properties and methods from the interfaces.
// 🎯 Key Takeaways
// ✅ A class can implement multiple interfaces using implements.
// ✅ The class must provide implementations for all properties and methods.
// ✅ Best for code reusability and enforcing multiple behaviors.

// 2️⃣ Example: Class Implementing Multiple Interfaces
// Define the first interface
interface Printable {
  print(): void;
}

// Define the second interface
interface Loggable {
  log(): void;
}

// Class implementing multiple interfaces
class Document1 implements Printable, Loggable {
  constructor(public title: string) {}

  print(): void {
    console.log(`Printing document: ${this.title}`);
  }

  log(): void {
    console.log(`Logging document: ${this.title}`);
  }
}

// Creating an instance
const myDoc = new Document1("TypeScript Guide");

myDoc.print(); // ✅ Output: Printing document: TypeScript Guide
myDoc.log();   // ✅ Output: Logging document: TypeScript Guide
// ✔️ Document implements both Printable and Loggable.
// ✔️ It must provide both print() and log() methods.




// 3️⃣ Another Example: Employee Class with Multiple Interfaces
// Interface for work-related behavior
interface Workable {
  work(): void;
}

// Interface for personal details
interface Person {
  name: string;
  age: number;
}

// Class implementing multiple interfaces
class Employee50 implements Workable, Person {
  constructor(public name: string, public age: number, public job: string) {}

  work(): void {
    console.log(`${this.name} is working as a ${this.job}`);
  }
}

// Creating an instance
const emp50 = new Employee50("Sagar", 22, "Software Developer");

console.log(emp50.name); // ✅ Output: Sagar
console.log(emp50.age);  // ✅ Output: 22
emp50.work();            // ✅ Output: Sagar is working as a Software Developer
// ✔️ Employee implements both Workable and Person.
// ✔️ It inherits name and age from Person and work() from Workable.
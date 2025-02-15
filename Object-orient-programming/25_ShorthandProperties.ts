// 📌 Shorthand Properties in TypeScript Classes
// In TypeScript, we can use shorthand properties to define and initialize class properties directly in the constructor, reducing boilerplate code. 🚀

// 🚀 Summary
// Feature	                 WithoutShorthand	             WithShorthand ✅
// .........................................................................................
// PropertyDeclaration	     Outside Constructor	         Inside Constructor
// Initialization	           Inside Constructor	            Automatically Done
// Code Length                    Longer	                  Shorter & Cleaner
// ...........................................................................................
// Using shorthand properties makes your code simpler, cleaner, and more readable! 🎯


// 1️⃣ Without Shorthand Properties (Traditional Way)..............................
// Normally, we declare properties outside the constructor and assign values inside it.
// ✅ Example: Without Shorthand
class Person11 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const person11 = new Person11("Sagar", 22);
person11.display(); // ✅ Output: Name: Sagar, Age: 22
// ✔️ Here, we declare properties first and initialize them separately inside the constructor.

// 2️⃣ With Shorthand Properties (Cleaner Way ✅).........................
// We can declare and initialize properties directly in the constructor using public, private, or protected.
// ✅ Example: Using Shorthand Properties
class Person12 {
  constructor(public name: string, public age: number) {} // ✅ Shorthand

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const person12 = new Person12("Sagar", 22);
person12.display(); // ✅ Output: Name: Sagar, Age: 22
// ✔️ No need to declare properties separately!
// ✔️ public name: string inside constructor automatically creates and initializes the property.


// 3️⃣ Works with private and protected Too!..............................
// We can also use private or protected with shorthand.
// ✅ Example: Using private
class BankAccount1 {
  constructor(private balance: number) {} // ✅ Private shorthand

  getBalance() {
    return this.balance; // ✅ Can access inside the class
  }
}

const account1 = new BankAccount1(5000);
console.log(account1.getBalance()); // ✅ Output: 5000
// console.log(account1.balance); // ❌ Error: Property 'balance' is private
// ✔️ private balance: number automatically creates and initializes balance inside the constructor.
// ✔️ It cannot be accessed outside the class.
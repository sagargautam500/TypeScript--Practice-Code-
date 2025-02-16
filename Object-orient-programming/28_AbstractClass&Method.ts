// In TypeScript, abstract classes provide a blueprint for other classes. They cannot be instantiated and often include abstract methods that must be implemented by subclasses.

// 1️⃣ What is an Abstract Class?
// ✅ A class that cannot be instantiated (i.e., you cannot create an object from it).
// ✅ It may contain abstract methods (methods without implementation).
// ✅ It can have regular methods (fully implemented methods).
// ✅ Subclasses must implement abstract methods from the parent class.

// 🚀 Summary Table
// Feature	               Abstract Class	                                   Regular Class
// Instantiation	        ❌ Cannot be instantiated	                        ✅ Can be instantiated
// Abstract Methods	      ✅ Can have abstract methods	                      ❌ Cannot have abstract methods
// Usage	                Used as a blueprint for other classes	              Used directly to create objects

// 🎯 When to Use Abstract Classes?
// ✅ When you want to enforce method implementation in child classes.
// ✅ When creating a common structure for multiple related classes.
// ✅ When some methods are shared while others must be implemented separately.

  
// 2️⃣ Syntax of Abstract Class
abstract class Animal11 {
  abstract makeSound(): void; // Abstract method (no implementation)

  move(): void {
    console.log("Animal is moving..."); // Regular method
  }
}
// ✔️ makeSound() is abstract → subclasses must implement it.
// ✔️ move() is regular → subclasses inherit it directly.


// 3️⃣ Example: Abstract Class with Subclasses
abstract class Animal12 {
  constructor(public name: string) {}

  abstract makeSound(): void; // Must be implemented by subclasses

  move(): void {
    console.log(`${this.name} is moving...`);
  }
}

class Dog11 extends Animal12 {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal12 {
  makeSound(): void {
    console.log("Meow! Meow!");
  }
}

const dog = new Dog11("Buddy");
dog.makeSound(); // ✅ Output: Woof! Woof!
dog.move(); // ✅ Output: Buddy is moving...

const cat = new Cat("Whiskers");
cat.makeSound(); // ✅ Output: Meow! Meow!
cat.move(); // ✅ Output: Whiskers is moving...
// ✔️ Dog and Cat inherit from Animal.
// ✔️ They must implement makeSound().
// ✔️ They can use the move() method without overriding it.


// 4️⃣ Abstract Methods
// Abstract methods must be implemented in child classes.
// They act as a contract for subclasses to follow.
// ✅ Example: Abstract Method in a Real-Life Scenario
abstract class Employee14 {
  constructor(public name: string, public salary: number) {}

  abstract calculateBonus(): number; // No implementation

  showDetails(): void {
    console.log(`${this.name} earns ₹${this.salary} per month.`);
  }
}

class Developer extends Employee14 {
  calculateBonus(): number {
    return this.salary * 0.2; // 20% bonus
  }
}

class Manager1 extends Employee14 {
  calculateBonus(): number {
    return this.salary * 0.3; // 30% bonus
  }
}

const dev = new Developer("Sagar", 50000);
console.log(dev.calculateBonus()); // ✅ Output: 10000
dev.showDetails(); // ✅ Output: Sagar earns ₹50000 per month.

const mgr = new Manager1("Rahul", 80000);
console.log(mgr.calculateBonus()); // ✅ Output: 24000
mgr.showDetails(); // ✅ Output: Rahul earns ₹80000 per month.
// ✔️ calculateBonus() is abstract → must be implemented in each subclass.
// ✔️ showDetails() is inherited by both Developer and Manager.
// ✔️ Developer and Manager have different bonus calculations.

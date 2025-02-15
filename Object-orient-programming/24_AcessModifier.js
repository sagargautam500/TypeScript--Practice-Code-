"use strict";
// Access modifiers control the visibility of properties and methods inside a class. TypeScript provides three access modifiers:
// 1️⃣ public → Accessible everywhere (default).
// 2️⃣ protected → Accessible within the class and its subclasses.
// 3️⃣ private → Accessible only within the same class.
// 🚀 Summary Table
// AccessModifier	AccessibleInsideClass	AccessibleInSubclass	AccessibleOutsideClass
// public	              ✅ Yes 	             ✅ Yes	              ✅ Yes
// protected           	✅ Yes	               ✅ Yes	              ❌ No 
// private              ✅ Yes                ❌ No	                ❌ No
// 1️⃣ public (Default)
// Accessible from anywhere (inside the class, outside the class, and in subclasses).
// If no modifier is specified, properties and methods are public by default.
// ✅ Example: public Access Modifier
class Person3 {
    name; // Public property
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const person4 = new Person3("Sagar");
console.log(person4.name); // ✅ Accessible outside the class
person4.greet(); // ✅ Accessible outside the class
// ✔️ public properties & methods can be accessed anywhere.
// 2️⃣ protected (Accessible in Subclasses)
// Accessible within the same class and its subclasses.
// Not accessible outside the class (unlike public).
// ✅ Example: protected Access Modifier
class Employee11 {
    salary; // Protected property
    constructor(salary1) {
        this.salary = salary1;
    }
}
// Child Class (Inheriting Employee)
class Manager extends Employee11 {
    constructor(salary1) {
        super(salary1);
    }
    showSalary() {
        console.log(`Salary is: ${this.salary}`); // ✅ Allowed in subclass
    }
}
const manager = new Manager(50000);
manager.showSalary(); // ✅ Allowed: Accessing inside subclass
// console.log(manager.salary);  // ❌ Error: Property 'salary' is protected
// ✔️ salary is accessible inside the Manager class but not outside.
// 3️⃣ private (Restricted to the Class)
// Accessible only within the same class.
// Cannot be accessed outside the class or by subclasses.
// ✅ Example: private Access Modifier
class BankAccount {
    balance; // Private property
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    // Public method to access private property
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(1000);
console.log(account.getBalance()); // ✅ Allowed: Accessing via public method
// console.log(account.balance);  // ❌ Error: Property 'balance' is private
// ✔️ balance is private and cannot be accessed directly.
// ✔️ We can access balance only through the getBalance() method.

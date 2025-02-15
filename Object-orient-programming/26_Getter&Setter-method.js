"use strict";
// 📌 Getters and Setters in TypeScript Classes
// Getters (get) and Setters (set) allow controlled access to class properties. They help encapsulate data, ensuring validation and logic when reading or modifying a property.
// 1️⃣ Why Use Getters & Setters?
// ✅ Encapsulation – Control access to private properties.
// ✅ Validation – Ensure valid values are assigned.
// ✅ Computed Properties – Return processed data dynamically.
// 🚀 Summary
// Feature	               Getter (get)	                 Setter (set)
//..................................................................................
// Purpose	          Retrieve property value	         Update property value
// Usage	             console.log(obj.prop)	            obj.prop = value
// Validation	          Not possible                    Can validate data
// Acts Like        	Property (no () needed)	          Property (no () needed)
// 🎯 When to Use Getters & Setters?
// ✅ When you need data validation (e.g., age cannot be negative).
// ✅ When hiding direct property access (private properties).
// ✅ When you want computed values (e.g., return name in uppercase).
// 2️⃣ get Method (Getter)
// Used to retrieve a property value.
// Acts like a property, so it's accessed without parentheses ().
// ✅ Example: Using get to Access Private Property
class Person13 {
    _name; // Private property
    constructor(name) {
        this._name = name;
    }
    // Getter method
    get name() {
        return this._name.toUpperCase(); // Returns name in uppercase
    }
}
const person13 = new Person13("Sagar");
console.log(person13.name); // ✅ Output: SAGAR (getter modifies it)
// ✔️ get name() acts like a property, not a function.
// ✔️ It returns _name in uppercase without modifying the original data.
// 3️⃣ set Method (Setter)
// Used to update a private property.
// Can validate data before assigning it.
// Called like a property, not a function.
// ✅ Example: Using set for Validation
class Person14 {
    _age = 0; // Private property with default value
    // Getter
    get age() {
        return this._age;
    }
    // Setter with validation
    set age(value) {
        if (value < 0) {
            console.log("❌ Age cannot be negative!");
        }
        else {
            this._age = value;
        }
    }
}
const person14 = new Person14();
person14.age = 25; // ✅ Assigning value using setter
console.log(person14.age); // ✅ Output: 25
person14.age = -5; // ❌ Output: Age cannot be negative!
// ✔️ Setter ensures age cannot be negative!
// ✔️ set age(value: number) modifies _age only if valid.
// 4️⃣ Using get and set Together
// ✅ Example: Full Implementation
class Employee12 {
    _salary = 0;
    constructor(initialSalary) {
        this._salary = initialSalary;
    }
    // Getter
    get salary1() {
        return this._salary;
    }
    // Setter with validation
    set salary1(amount) {
        if (amount < 0) {
            console.log("❌ Salary cannot be negative!");
        }
        else {
            this._salary = amount;
        }
    }
}
const emp11 = new Employee12(50000);
console.log(emp11.salary1); // ✅ Output: 50000
emp11.salary1 = 60000; // ✅ Updating salary
console.log(emp11.salary1); // ✅ Output: 60000
emp11.salary1 = -1000; // ❌ Output: Salary cannot be negative!
// ✔️ Encapsulation – _salary is private and cannot be accessed directly.
// ✔️ Controlled Updates – set salary() ensures only valid values are assigned.
//Practice section::::::::::::::Temperature Converter......................................
class Temperature {
    _celsius = 0;
    get Celsius() {
        return this._celsius;
    }
    set Celsius(tempCelsius) {
        this._celsius = tempCelsius;
    }
    get Fahrenheit() {
        let c = this._celsius;
        return (c * 9 / 5) + 32;
    }
    set Fahrenheit(f) {
        this._celsius = (f - 32) * 5 / 9;
    }
}
const temp = new Temperature();
// temp.Celsius=25;
temp.Fahrenheit = 98.6;
console.log("Celsius value=", temp.Celsius);
console.log("Fahrenheit value=", temp.Fahrenheit);

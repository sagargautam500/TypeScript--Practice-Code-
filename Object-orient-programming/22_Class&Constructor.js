"use strict";
// 1️⃣ What is a Class?
// A class is a blueprint for creating objects. It defines properties (variables) and methods (functions).
// ✅ Example: Creating a Class
class Persons {
    name;
    age;
    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Creating an object (Instance of a class)
const persons1 = new Persons();
persons1.name = "Sagar";
persons1.age = 22;
persons1.greet(); // ✅ Output: Hello, my name is Sagar and I am 22 years old.
// ✔️ Class: Defines properties name and age.
// ✔️ Object: persons1 is an object of class Persons.
// ✔️ Method: greet() prints a message.
// 2️⃣  What is a Constructor?
// A constructor is a special method that runs automatically when an object is created. It helps initialize object properties.
// ✅ Example: Constructor in TypeScript
class Students {
    name;
    age;
    hobbies;
    // Constructor (runs when an object is created)
    constructor(names, age, hobbies) {
        this.name = names;
        this.age = age;
        this.hobbies = hobbies;
    }
    // Method
    showDetails() {
        console.log(`Student Name: ${this.name}, Age: ${this.age},Hobbies :${this.hobbies ? this.hobbies : "No hobbies"}`);
        // if(this.hobbies){
        //   console.log(`Student Name: ${this.name}, Age: ${this.age},Hobbies :${this.hobbies}`);
        // }else{
        //   console.log(`Student Name: ${this.name}, Age: ${this.age}`);
        // }
    }
}
// Creating objects using the constructor
const student1 = new Students("John", 20);
const student2 = new Students("Emma", 18, ["read", "Write"]);
student1.showDetails(); // ✅ Student Name: John, Age: 20,Hobbies :No hobbies
student2.showDetails(); // ✅ Student Name: Emma, Age: 18,Hobbies :read,Write

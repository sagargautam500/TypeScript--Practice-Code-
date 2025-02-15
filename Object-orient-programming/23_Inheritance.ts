// Inheritance is a core concept of Object-Oriented Programming (OOP). It allows a child class to inherit properties and methods from a parent class, avoiding code repetition. 🚀
// 1️⃣ What is Inheritance?
// Inheritance allows us to create a new class based on an existing class.
// The parent class is called the Base Class or Super Class.
// The child class is called the Derived Class or Sub Class.
// The child class gets all properties & methods of the parent class.

// ✅ Example: Basic Inheritance
// Parent Class
class Animal1 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child Class (Inherits Animal)
class Dog1 extends Animal1 {
  
}

// Creating an object of the Dog class
const myDog = new Dog1("Buddy");
myDog.makeSound(); // ✅ Output: Buddy makes a sound.
// ✔️ extends keyword allows Dog to inherit from Animal.
// ✔️ Dog class can access makeSound() method from Animal.


// 2️⃣ What is the super Keyword?
// The super keyword refers to the parent class.
// It is used to call the constructor of the parent class inside the child class.
// It is also used to call parent class methods inside the child class.

// ✅ Example-1: Using super in Constructor & Method.....................
// Parent Class
class Animal2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child Class (Inherits Animal)
class Dog2 extends Animal2 {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // Calling parent class constructor
    this.breed = breed;
  }

  // New method in child class
  bark() {
    console.log(`${this.name} barks! and Breed is ${this.breed}`);
  }
}

// Creating an object of the Dog class
const myDog1 = new Dog2("Buddy", "Labrador");
myDog1.makeSound(); // ✅ Output: Buddy makes a sound.
myDog1.bark();      // ✅ Output: Buddy barks!
// ✔️ Child class has additional properties (breed) & methods (bark()).


// ✅ Example-2: Using super in Constructor & Method............................
// Parent Class
class Person2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

// Child Class
class Student2 extends Person2 {
  rollNumber: number;

  constructor(name: string, rollNumber: number) {
    super(name); // Calling Parent Class Constructor
    this.rollNumber = rollNumber;
  }

  // Overriding Parent Method
  greet() {
    super.greet(); // Calling Parent Method
    console.log(`I am a student with Roll No: ${this.rollNumber}`);
  }
}

// Creating Object
const student3 = new Student2("Sagar", 101);
student3.greet(); // ✅ Output:  Hello, I am Sagar , I am a student with Roll No: 101
// ✔️ super(name) calls the Person constructor inside Student.
// ✔️ Overriding Parent Method: super.greet() calls Person's greet() before adding extra behavior.
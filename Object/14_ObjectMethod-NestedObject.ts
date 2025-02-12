// 3️⃣ Object Methods in TypeScript..............................................................................
// ✅ Defining Methods Inside an Object
let user7:{name:string;greet():void}= {
  name: "Sagar",
  greet() {
      console.log("Hello, " + this.name);// this.name refers to the object’s name property.
  },
};
user7.greet(); // Output: Hello, Sagar

// ✅ Defining Methods in Type Alias
type info5 = {
  name: string;
  greet:()=>void;  //TypeScript ensures greet must be a function.
};

let user8: info5 = {
  name: "SagarGTM",
  greet(){
      console.log("Hello, " + this.name);
  },
};
user8.greet(); // Output: Hello, SagarGTM

// 4️⃣ Nested Objects............................................................................
// Objects can have nested objects inside them.
type Address = {
  city: string;
  country: string;
};
type info6 = {
  name: string;
  age: number;
  address: Address; // Nested object
};

let user10: info6 = {
  name: "Sagar",
  age: 22,
  address: {
      city: "Bhaktapur",
      country: "Nepal"
  }
};
console.log(user10.address.city); // Output: Bhaktapur
console.log(user10.address); // Output: {..}

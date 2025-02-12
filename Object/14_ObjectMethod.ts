// 3️⃣ Object Methods in TypeScript
// ✅ Defining Methods Inside an Object
let user7:{name:string,greet():void}= {
  name: "Sagar",
  greet() {
      console.log("Hello, " + this.name);// this.name refers to the object’s name property.
  }
};
user7.greet(); // Output: Hello, Sagar


// ✅ Defining Methods in Type Alias
type info5 = {
  name: string;
  greet:()=>void;  //TypeScript ensures greet must be a function.
};

let user8: info5 = {
  name: "SagarGTM",
  greet() {
      console.log("Hello, " + this.name);
  }
};
user8.greet(); // Output: Hello, SagarGTM

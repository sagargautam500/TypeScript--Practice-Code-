// 5️⃣ Generic Interface
// You can use Generics inside interfaces.
interface Box<T> {
  value: T;
  val?:T;
}

let stringBox: Box<string> = { value: "Hello" };
let numberBox: Box<number> = { value: 100 };
let booleanBox:Box<boolean|number>= {val:true,value:78};

console.log(stringBox.value); // ✅ "Hello"
console.log(numberBox.value); // ✅ 100
console.log(booleanBox);
// ✔️ The interface works with any type.


// 6️⃣ Generic Class
// ✔️ The class can store any type.
// You can create classes that work with multiple types.
class storage<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  getData(): T {
    return this.data;
  }
}

let textStorage = new storage<string>("Hello");
console.log(textStorage.getData()); // ✅ "Hello"

let numberStorage = new storage<number>(123);
console.log(numberStorage.getData()); // ✅ 123


// 7️⃣ Generic Constraints (extends)
// If you want to restrict the type, you can use extends.
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("Hello"));      // ✅ 5
console.log(getLength([1, 2, 3]));    // ✅ 3
console.log(getLength({ length: 10 })); // ✅ 10
// ❌ getLength(100); → Error because number doesn’t have a length property.




// 8️⃣ Real-Life Example: API Response Handling
interface ApiResponse<T> {
  data: T;
  status: string;
}

let userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: "Sagar", age: 22 },
  status: "success"
};

console.log(userResponse.data.name); // ✅ "Sagar"
console.log(userResponse.status);    // ✅ "success"
// ✔️ This makes API responses flexible and reusable.
"use strict";
let stringBox = { value: "Hello" };
let numberBox = { value: 100 };
let booleanBox = { val: true, value: 78 };
console.log(stringBox.value); // ✅ "Hello"
console.log(numberBox.value); // ✅ 100
console.log(booleanBox);
// ✔️ The interface works with any type.
// 6️⃣ Generic Class
// ✔️ The class can store any type.
// You can create classes that work with multiple types.
class storage {
    data;
    constructor(value) {
        this.data = value;
    }
    getData() {
        return this.data;
    }
}
let textStorage = new storage("Hello");
console.log(textStorage.getData()); // ✅ "Hello"
let numberStorage = new storage(123);
console.log(numberStorage.getData()); // ✅ 123
// 7️⃣ Generic Constraints (extends)
// If you want to restrict the type, you can use extends.
function getLength(item) {
    return item.length;
}
console.log(getLength("Hello")); // ✅ 5
console.log(getLength([1, 2, 3])); // ✅ 3
console.log(getLength({ length: 10 })); // ✅ 10
let userResponse = {
    data: { name: "Sagar", age: 22 },
    status: "success"
};
console.log(userResponse.data.name); // ✅ "Sagar"
console.log(userResponse.status); // ✅ "success"
// ✔️ This makes API responses flexible and reusable.

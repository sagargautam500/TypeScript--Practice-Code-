// 4️⃣ Sorting and Reversing
// (a) sort() – Sort Elements (Default: Alphabetical)
// ✅ Sorts elements as strings by default.
let numbers7 = [40, 10, 30, 20];
// numbers7.sort();
console.log(numbers7.sort()); // Output: [10, 20, 30, 40] (Sorted as numbers)
// For numerical sorting, use a compare function:
numbers7.sort((a, b) => a - b); // Ascending //Output: [10, 20, 30, 40]
numbers7.sort((a, b) => b - a); // Descending ///Output: [40,30,20,10]

// (b) reverse() – Reverse Array Order
// ✅ Modifies array to reverse order.
numbers7.reverse();
console.log(numbers7); // Output: [10,20,30,40]

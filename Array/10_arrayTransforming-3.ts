// 3️⃣ Transforming Arrays
// (a) map() – Modify Each Element
// ✅ Returns a new array with modified values.
let numbers6 = [1, 2, 3,4,5,6];
let squared1 = numbers6.map(num => num * num);
console.log(squared1); // Output: [1, 4, 9,16,25,36]

// (b) filter() – Get Elements Matching Condition
// ✅ Returns new array with elements that meet the condition.
let filtered = numbers6.filter(num => num > 3);
console.log(filtered); // Output: [4,5,6]

// (c) reduce() – Accumulate Values
// ✅ Reduces array to a single value.
let summm = numbers6.reduce((acc, num) => acc + num, 0); //initialize 0,acc=stroed value now 0,num=array each value
console.log("sum=",summm); // Output: sum=21


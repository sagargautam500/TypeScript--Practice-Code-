// 3️⃣ Transforming Arrays
// (a) map() – Modify Each Element
// ✅ Returns a new array with modified values.
let numbers6:number[] = [1, 2, 3,4,5,6];
let squared1 = numbers6.map((num:number) => num * num);
console.log(squared1); // Output: [1, 4, 9,16,25,36]

// (b) filter() – Get Elements Matching Condition
// ✅ Returns new array with elements that meet the condition.
let filtered = numbers6.filter((num:number)=> num > 3);
console.log(filtered); // Output: [4,5,6]

// (c) reduce() – Accumulate Values
// ✅ Reduces array to a single value.
let summm = numbers6.reduce((acc:number, num:number) => acc + num, 0); //initialize 0,acc=stroed value now 0,num=array each value
console.log("sum=",summm); // Output: sum=21



//For Some Practice code examples::
//1:string array convert to upper case::
const books:string[]=["Java","Spm","Pom","Project","DataWarehouse"];
let books1:string[]=books.map((val:string)=>val.toUpperCase());
console.log(books1);

//2.crate new array that containt only string with length greater then 5:
let books2=books.filter((val:string)=>val.length>5);
console.log(books2);

//3. crate new array that containt only string which string name Start with "P":
let books3=books.filter((value:string)=>value[0]==="P");
console.log(books3)
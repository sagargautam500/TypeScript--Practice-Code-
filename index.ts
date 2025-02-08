export {}; // This ensures the file is treated as a module
// tsconfig file initialization : tsc --init

const a:number = 56;
// let b:number = "ramm";
let b:number=4;
let c:number=a+b;
console.log(c);
 
function divide(a:number,b:number):number{   //number is a type annotation
  // let c:number=a/b;
  // console.log("divide value:"+c);
  return a/b;
}
let result=divide(10,5);
console.log(result);


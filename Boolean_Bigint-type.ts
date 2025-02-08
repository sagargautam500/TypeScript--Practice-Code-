//boolean has only two type value :true ,false.......................
let hasStarted:boolean=true;
let isDone:boolean=false;
// let isMyName:boolean="sagar"//invalid type 
let isMyName:boolean=true;
 
//check even number::
function isEven(a:number):boolean{
  return a%2===0;
}
console.log(isEven(-6))

//check divisible number
function isDivisible(a:number):boolean{
  return (a%4===0 && a%8===0);
}
console.log(isDivisible(-12))


//BigInt:it is support large number value i.e 2^53.it specify the written to n suffix of number like:112n..................
// let maxNumber:number=Number.MAX_SAFE_INTEGER;
let bigNumber:bigint=90071992547409955n;
console.log(bigNumber)

let anotherBigNumber:bigint=BigInt(900719925474099289668);//another method to define BigInt
console.log(anotherBigNumber);

let summ:bigint = bigNumber + anotherBigNumber;
console.log(summ);

//Adding two BigInt number:
let num1: bigint = BigInt(123456789012345678901234567890);
let num2: bigint = 987654321098765432109876543210n;
let sum: bigint = num1 + num2;
console.log(sum); // Output: 1111111110111111111011111111100n

"use strict";
//boolean has only two type value :true ,false.......................
let hasStarted = true;
let isDone = false;
// let isMyName:boolean="sagar"//invalid type 
let isMyName = true;
//check even number::
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(-6));
//check divisible number
function isDivisible(a) {
    return (a % 4 === 0 && a % 8 === 0);
}
console.log(isDivisible(-12));
//BigInt:it is support large number value i.e 2^53.it specify the written to n suffix of number like:112n..................
// let maxNumber:number=Number.MAX_SAFE_INTEGER;
let bigNumber = 90071992547409955n;
console.log(bigNumber);
let anotherBigNumber = BigInt(900719925474099289668); //another method to define BigInt
console.log(anotherBigNumber);
let summ = bigNumber + anotherBigNumber;
//Adding two BigInt number:
let num1 = BigInt(123456789012345678901234567890);
let num2 = 987654321098765432109876543210n;
let sum = num1 + num2;
console.log(summ); // Output: 1111111110111111111011111111100n

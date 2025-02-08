"use strict";
let firstName = "Sagar";
let lastName = "Gauatm";
let fullName = firstName + " " + lastName; //string concatenation
console.log(fullName);
//convert number to string
let num = 78;
let numm = num.toString();
console.log(numm);
console.log(typeof numm); //return string type
num.toString();
console.log(typeof num); //return number type 
//string length
let sentence = "hlo my name is sagar gautam";
console.log(sentence.length);
//string Uppercase and Lowercase
let upperText = fullName.toUpperCase();
let lowerText = fullName.toLowerCase();
console.log(upperText);
console.log(lowerText);
//substring
let longText = "This is a long sentence.";
let shortText = longText.substring(0, 12);
console.log(shortText);
//string comparision
let str1 = "Hello";
let str2 = "World";
let areEqual = str1 == str2;
console.log(areEqual);
//string template
let product = "Phone";
let price = 500;
let message = `The product ${product} is priced at ${price} dollars.`;
console.log(message);

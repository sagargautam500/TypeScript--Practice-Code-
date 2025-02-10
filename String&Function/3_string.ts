let firstName:string="Sagar";
let lastName:string="Gauatm";
let fullName:string=firstName+" "+lastName; //string concatenation
console.log(fullName);

//convert number to string
let num:number=78;
let numm:string=num.toString();
console.log(numm);
console.log(typeof numm);//return string type
num.toString();
console.log(typeof num);//return number type 

//string length
let sentence:string="hlo my name is sagar gautam"
console.log(sentence.length);

//string Uppercase and Lowercase
let upperText:string=fullName.toUpperCase();
let lowerText:string=fullName.toLowerCase();
console.log(upperText);
console.log(lowerText);

//substring
let longText: string = "This is a long sentence.";
let shortText: string = longText.substring(0, 12);
console.log(shortText);

//string comparision
let str1: string = "Hello";
let str2: string = "World";
let areEqual: boolean = str1 === str2;
console.log(areEqual);

//string template
let product: string = "Phone";
let price: number = 500;
let message: string = `The product ${product} is priced at ${price} dollars.`;
console.log(message)
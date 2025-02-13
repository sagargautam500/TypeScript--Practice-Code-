"use strict";
let personFirst = ["sagar", 23, true];
let personSecond = ["gauatm", 22, false];
const displayInfo = (person) => {
    // console.log("person name="+person[0]+" "+" person age="+person[1])
    const [name, age, isAdmitcard] = person;
    console.log(`Name =${name},age=${age},${isAdmitcard ? "permit to exam hall" : "Do not permit to exam hall"}`);
};
displayInfo(personFirst);
displayInfo(personSecond);

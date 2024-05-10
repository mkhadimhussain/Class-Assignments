"use strict";
// for...in loop
// The for...in loop is used to iterate over the properties of an object. 
// It enumerates over all enumerable properties, including inherited ones 
// (unless the property is marked as non-enumerable).
Object.defineProperty(exports, "__esModule", { value: true });
// Syntax
// for (let key in object) {
//         // code to be executed
// }
// Iterate over an object using for...in loop
let person1 = {
    name: "Alice",
    age: 30,
    country: "USA"
};
for (let key in person1) { // key = name, age, country
    console.log(key + ":" + person1[key]);
}
// Output
// name:Alice
// age:30
// country:USA
//--------------------------------------------------------------------------
console.log();
// Another Example 
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}
// Output
// name: John
// age: 30
// city: New York
//--------------------------------------------------------------------------
console.log();
// Another Example
const person2 = {
    name: 'Khadim',
    age: 23,
    city: 'Karachi'
};
for (let key in person2) {
    console.log(key, ":", person2[key]);
}
// Output
// name : Khadim
// age : 23
// city : Karachi
//--------------------------------------------------------------------------

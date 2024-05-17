// Object
// An object is an instance which contains set of key value pairs. The values 
// can be scalar values or functions or even array of other objects.
var myProperties = {
    name: "Khadim",
    age: 23,
    address: "ABC 123 Karachi",
    rollNum: 1234,
    isMarried: false,
    hobbies: ["Coding", "Photography"]
};
console.log(myProperties);
// Output
// {
//   name: 'Khadim',
//   age: 23,
//   address: 'ABC 123 Karachi',
//   rollNum: 1234,
//   isMarried: false
//   hobbies: [ 'Coding', 'Photography' ]
// }
// updating age 
myProperties.age = 20;
console.log(myProperties.age); // Output: 20
// Printing address by Dot Notation
console.log(myProperties.address); // Output: ABC 123 Karachi
// Printing address by Square Notation
console.log(myProperties["address"]); // Output: ABC 123 Karachi
// Dot Notation
var myAge = myProperties.age;
console.log(myProperties[myAge]); // Output: undefined
// Shows undefined because myProperties is searching myAge key in object which is not available.
// Square Notation
var myname = "name";
console.log(myProperties[myname]); // Output: Khadim
// Square bracket notation is useful when the property name is dynamic, such as when it's stored 
// in a variable or when the name is not a valid identifier.
console.log(myProperties.hobbies[0]); // Output: Coding
console.log(myProperties["hobbies"][1]); // Output: Photography

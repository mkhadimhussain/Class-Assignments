// Typecasting
// Typecasting in TypeScript allows you to override the inferred type of a value, also known as
// type assertion.
// let abc: string = 4             // Error
// let abc: string = 4 as unknown  // Error
// let abc: string = 4 as string   // Error 
var abc = 44;
console.log(abc); // Output:
//-----------------------------------------------------------------------------------------------
var xyz = 4;
console.log(xyz); // Output:
//-----------------------------------------------------------------------------------------------
var value1 = 5;
var value2 = value1;
console.log(value2); // Output: 5
//-----------------------------------------------------------------------------------------------
var value3 = "This is a String";
var value4 = value3.length;
console.log(value4); // Output: 16
//-----------------------------------------------------------------------------------------------
// Another example using angle-bracket syntax
var value5 = "TypeScript";
var value6 = value5.length;
console.log(value6); // Output: 10
//-----------------------------------------------------------------------------------------------

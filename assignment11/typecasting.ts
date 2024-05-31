// Typecasting

// Typecasting in TypeScript allows you to override the inferred type of a value, also known as
// type assertion.

// let abc: string = 4             // Error
// let abc: string = 4 as unknown  // Error
// let abc: string = 4 as string   // Error 
let abc: string = 44 as unknown as string
console.log(abc);  // Output: 44

//-----------------------------------------------------------------------------------------------

let xyz: boolean = 4 as unknown as boolean
console.log(xyz);  // Output: 4

//-----------------------------------------------------------------------------------------------

let data: unknown;
let mydata: boolean = data as boolean;

//-----------------------------------------------------------------------------------------------

let value1: unknown = 5;
let value2: string = value1 as string
console.log(value2);  // Output: 5

//-----------------------------------------------------------------------------------------------

let value3: unknown = "This is a String";
let value4: number = (value3 as string).length;
console.log(value4);  // Output: 16

//-----------------------------------------------------------------------------------------------

// Another example using angle-bracket syntax
let value5: string = "TypeScript";
let value6: number = (<string>value5).length;
console.log(value6);  // Output: 10

//-----------------------------------------------------------------------------------------------

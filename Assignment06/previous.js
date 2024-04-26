////////////////////// CLASS ASSIGNMENT 06 //////////////////////
// - Let Variables (changeble/reassigned)
let string = "Hello World";
let number = 247;
let boolean = true;
// - Constant Variables (Unchangeble/not reassigned)
const constString = "Constant String";
const constNumber = 3.14;
//-----------------------------------------------------------------------------------
// Case Sensitive
// Common Naming Conventions in TypeScript
let camelCase = "camelCase";
let snake_case = "snake_case";
let PascalCase = "PascalCase";
//-----------------------------------------------------------------------------------
// Strong Typing
let a = 45; // now we can not assign 'a' variable a value of type string, boolean etc
// a = "karachi"     // Shows Error because now 'a' accept numbers only, because of strong typing
// Type Inference
// When we declare a variable in following way 
let b = "TypeScript";
// compiler itself detects type of 'b' variablra as String, this is called Type Inference.
// b = 234;             // Shows Error becasue now 'b' accept string only, because compiler detection
//-----------------------------------------------------------------------------------
// Primitive Data Types
// Data types which are defined by the developers of TypeScript are known as Primitive Data Types.
// 1. Common Primitive Data Types
// - String => digitis, alphabets, symbols
// - Number => +/- 98765433210, digitis, alphabets, symbols, 2**53 - 1 can also stored
// - Boolean => true, false only
// - Any => can have value of any format
//-----------------------------------------------------------------------------------
// 2. Additional Primitive Data Types
// - Undefined => Variable that is not initialized
let undefinedVariable;
console.log(undefinedVariable); // Output: undefined
// - Unknown => 
// Variable type is not defined
// It is used when type of varible is not known at the time of declaration.
// Safer alternative to any.
let unknownVariable;
unknownVariable = 4;
unknownVariable = true;
unknownVariable = "Unknown";
console.log(unknownVariable);
// - BigInt => When we know value can be greater than 9007199254740991 or less than 9007199254740991, we use this type
let aa = 2n ** 6n; // n shows the the number is BigInt
let bb = aa * 2n;
console.log(bb); // output: 128n
// - Symbol => it can be used as a key of an object property
// - Null => it is used to signify that a variable intentionally has no value
//-----------------------------------------------------------------------------------
// Non Primitive Data Types
// These are data types that are not defined by the programming language itself but are instead created by the 
// programmer using the language's primituve data types. In TypeScript (as in JavaScript), non-primitve data types include:
// - Objects 
let person = { name: "Alice", age: 23 };
console.log(person);
// - Arrays
let array1 = [1, 2, 3, 4];
console.log(array1);
//  - Functions
let fun = function funName() {
    return "fun is a function now";
};
console.log(fun());
// Another example
function funName() {
    return "function";
}
console.log(funName());
// - Classes
// - Interfaces
//-----------------------------------------------------------------------------------
// Comments in Code  
// Comments can be added in code to provide explanations, documentations or to temporarily disable 
// parts of the code
//-----------------------------------------------------------------------------------
// OPERATORS
// Operators are symbols or keywords that perform operations on variables and values. TypeScript supports a 
// variety of operators, which can be categorized into several groups. 
// i. Arithmetic Operators (+,-,*,/,%)
// ii. Comparison Operators (==,===,!=,!==,<,>,<=,>=)
// iii. Logical Operators (&&,||,!)
// iv. Assignment Operators (=,+=,-=,*=,/=,%=)
// v. Typeof Operators (typeof)
// i. Arithmetic Operators (+,-,*,/,%)
let num1 = 10;
let num2 = 5;
// Addition (+)
console.log(num1 + num2); // Output: 15
// Subtraction (-)
console.log(num1 - num2); // Output: 5
// Multiplication (*)
console.log(num1 * num2); // Output: 50
// Division (/)
console.log(num1 / num2); // Output: 2
// Modulus (%)
console.log(num1 % num2); // Output: 0
// Power (**)
console.log(num1 ** num2); // Output: 100000
//-----------------------------------------------------------------------------------
// ii. Comparison Operators (==,===,!=,!==,>,<,>=,<=)
let x = 5;
let y = 10;
// Equality (==)
console.log(x == y); // false
//console.log(15 == 19)      //false   shows error
console.log(5 == 5); //ture
//console.log(5 == "5")      //true   gives error but shows true bcz compiler see 5 in "" 
//console.log(5 == "5abc")   //false  bcz here 5 is not alone they have some string in it in their ""
// Strict Equality (===) => it ensures both the values and types (Type Check)
console.log(x === y); // false
console.log(7 === 7); //true
//console.log(5 === 6)          //false     gives error
//console.log(8 === "8")        //false     gives error
//console.log(9 === "9bgs")     //false     gives error
//console.log("abc" === "xyz")  //false     gives error  
console.log("abc" === "abc"); //true
// Inequality (!=)
console.log(x != y); // true
console.log(x != x); // false
// Strict Inequality (!=) => it ensure both values and types
console.log(x !== y); // true
// Greater than (>)
console.log(x > y); // false
// Less than (<)
console.log(x < y); // true
// Greater than and equal to (>=)
console.log(x >= y); // false
// Less than and equal to (<=)
console.log(x <= y); // true
//-----------------------------------------------------------------------------------
// iii. Logical Operators (&&,||,!)
let p = true;
let q = false;
// AND (&&) returns true only when both conditions is true
console.log(p && q); // false
// OR (||) returns true when atleast one condition is true
console.log(p || q); // true
// NOT (!) reverse the boolean value of a condition
console.log(!p); // false
console.log(!q); // true
// ANOTHER EXAMPLE
let m = 5;
let n = 6;
// AND (&&) returns true only when both conditions is true
console.log(m == 4 && n == 6); // false
console.log(m == 5 && n == 6); // true 
// OR (||) returns true when atleast one condition is true
console.log(m == 4 || n == 6); // true
console.log(m == 5 || n == 6); // true 
console.log(m == 3 || n == 2); // false
// NOT (!) reverse the boolean value of a condition
console.log(!(m == n)); // true
console.log(!(m == 5 && n == 6)); // false 
//-----------------------------------------------------------------------------------
// iv. Assignment Operators (=,+=,-=,*=,/=,%=)
// Assignment (=)
let num3 = 10;
console.log(num3); // Output: 10
// Add and Assign (+=)
num3 += 5; // num3 = num3 + 5 => 10 + 5 = 15
console.log(num3); // Output: 15
// Subtract and Assign (-=)
num3 -= 3; // 15 - 3 = 12
console.log(num3); // Output: 12
// Multiply and Assign (*=)
num3 *= 2; // 12 * 2 = 24
console.log(num3); // Output: 24
// Divide and Assign (/=)
num3 /= 3; // 24 / 3 = 8
console.log(num3); // Output: 8
// Modulus and Assign (%=)
num3 %= 3; // 8 % 3 = 2
console.log(num3); // Output: 2
// Power and Assign (**=)
num3 **= 4; // 2 ** 4 = 16
console.log(num3); // Output: 16
//-----------------------------------------------------------------------------------
// v. Typeof Operators (typeof)
// It returs a string that represents the data type of a variable or an expression
let hello = "Hello World";
console.log(typeof hello); // Output: string
let favNum = 24;
console.log(typeof favNum); // Output: number
//-----------------------------------------------------------------------------------
// Concatenation
let name1 = "Khadim";
let name2 = "Hussain";
console.log(name1 + " " + name2); // Output: Khadim Hussain
// Another Example
let myName = "Khadim";
let age = 23;
console.log(myName + age); // Output: Khadim23
//-----------------------------------------------------------------------------------
// Conditional Statements
let grade = "B";
if (grade == "A") {
    console.log("Excellent");
}
else if (grade == "B") {
    console.log("Very Good");
}
else if (grade == "C") {
    console.log("Good");
}
else if (grade == "D") {
    console.log("Fair");
}
else if (grade == "F") {
    console.log("Fail");
}
else {
    console.log("Invalid Grade");
}
//-----------------------------------------------------------------------------------
// Functions
function addNums() {
    const num1 = 20;
    const num2 = 10;
    return num1 + num2;
}
console.log(addNums());
// Another Example
function marksheet(math, eng, urdu, pst, comp) {
    const total = 500;
    const obtained = math + eng + urdu + pst + comp;
    const result = obtained / total * 100;
    return `Your result is ${result}%.`;
}
console.log(marksheet(50, 50, 50, 50, 50));
// Another Example
let multiplyNum = function multiplication(num1, num2) {
    return num1 * num2;
};
console.log(multiplyNum(3, 2));
export {};
//-----------------------------------------------------------------------------------

"use strict";
// do...while loop
// The do...while loop is similar to the while loop, but it guarantees that the 
// block of code will execute at least once before checking the condition.
Object.defineProperty(exports, "__esModule", { value: true });
// Syntax:
// do {
//   // code to be executed
// } while (condition);
// Print 5 times a 'String' using do...while loop
let i = 1;
do {
    console.log("Do While Loop", i);
    i++;
} while (i <= 5);
// Output
// Do While Loop 1
// Do While Loop 2
// Do While Loop 3
// Do While Loop 4
// Do While Loop 5
//--------------------------------------------------------------------------
console.log();
// Another Example
let a = 0;
do {
    console.log("TypeScript", a);
    a++;
} while (a < 5);
// Output
// TypeScript 0
// TypeScript 1
// TypeScript 2
// TypeScript 3
// TypeScript 4
//--------------------------------------------------------------------------
console.log();
// Print numbers from 1 to 5 using a do...while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);
// Output
// 1
// 2
// 3
// 4
// 5
//--------------------------------------------------------------------------

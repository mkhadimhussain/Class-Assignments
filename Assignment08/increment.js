"use strict";
// Post Increment (i++)
// In post-increment, the value of the variable is first used in the expression, 
// and then it's incremented.
Object.defineProperty(exports, "__esModule", { value: true });
let x = 5;
let y = x++;
console.log(y); // y get the value 5, then x is increased to 6
//--------------------------------------------------------------------------
// Loop starting from 0
console.log("\nLoop starting from 0");
for (let a = 0; a <= 5; a++) {
    console.log("Post Increment", a);
    // This will print 6 times because a = 0
}
// Output
// Post Increment 0
// Post Increment 1
// Post Increment 2
// Post Increment 3
// Post Increment 4
// Post Increment 5
//--------------------------------------------------------------------------
// Loop starting from 1
console.log("\nLoop starting from 1");
for (let b = 1; b <= 5; b++) {
    console.log("Post Increment", b);
    // This will print 5 times because b = 1
}
// Output
// Post Increment 1
// Post Increment 2
// Post Increment 3
// Post Increment 4
// Post Increment 5
//--------------------------------------------------------------------------
console.log();
// Pre Increment
// In pre-increment, the variable is incremented first, and then its value 
// is used in the expression. It is also known as “Unary”.
let p = 5;
let q = ++p;
console.log(q); // p incremented to 6, and q gets the value 6
//--------------------------------------------------------------------------
// Starting from 0
console.log("\nLoop starting from 0");
for (let a = 0; a <= 5; ++a) {
    console.log("Pre Increment", a);
    // This will print 6 times because a = 0
}
// Output
// Pre Increment 0
// Pre Increment 1
// Pre Increment 2
// Pre Increment 3
// Pre Increment 4
// Pre Increment 5
//--------------------------------------------------------------------------
// Starting from 1
console.log("\nLoop starting from 1");
for (let b = 1; b <= 5; ++b) {
    console.log("Pre Increment", b);
    // This will print 5 times because b = 1
}
// Output
// Pre Increment 1
// Pre Increment 2
// Pre Increment 3
// Pre Increment 4
// Pre Increment 5
//--------------------------------------------------------------------------

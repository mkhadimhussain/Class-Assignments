"use strict";
// Post Decrement (i)
// In post-increment, the value of the variable is first used in the expression, 
// and then it's decremented.
Object.defineProperty(exports, "__esModule", { value: true });
let x = 5;
let y = x--;
console.log(y); // y get the value 5, then x is decreased to 4
//--------------------------------------------------------------------------
// Loop till 0
console.log("\nLoop starting from 0");
for (let a = 5; a > 0; a--) {
    console.log("Post Decrement", a);
    // This will print 5 times because a > 0
}
// Output
// Post Decrement 5
// Post Decrement 4
// Post Decrement 3
// Post Decrement 2
// Post Decrement 1
//--------------------------------------------------------------------------
// Loop till 1
console.log("\nLoop starting from 1");
for (let b = 5; b > 1; b--) {
    console.log("Post Decrement", b);
    // This will print 4 times because b > 1
}
// Output
// Post Decrement 5
// Post Decrement 4
// Post Decrement 3
// Post Decrement 2
//--------------------------------------------------------------------------
console.log();
// Pre Decrement
// In pre-increment, the variable is decremented by 1 first, and then its value 
// is used in the expression.
let p = 5;
let q = --p;
console.log(q); // p is decremented to 4, and q will be 4
//--------------------------------------------------------------------------
// Starting from 0
console.log("\nLoop starting from 0");
for (let a = 5; a > 0; --a) {
    console.log("Pre Decrement", a);
    // This will print 5 times because a > 0
}
// Output
// Pre Decrement 5
// Pre Decrement 4
// Pre Decrement 3
// Pre Decrement 2
// Pre Decrement 1
//--------------------------------------------------------------------------
// Starting from 1
console.log("\nLoop starting from 1");
for (let b = 5; b > 0; --b) {
    console.log("Pre Decrement", b);
    // This will print 5 times because b > 1
}
// Output
// Pre Decrement 5
// Pre Decrement 4
// Pre Decrement 3
// Pre Decrement 2
// Pre Decrement 1
//--------------------------------------------------------------------------

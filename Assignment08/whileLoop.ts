// while loop
// The while loop is used when you don't know the number of iterations required beforehand.

// Syntax:
// while (condition) {
//   // code to be executed
// }

// Print String 5 times using a while loop
let i = 1;          // if i = 0 then 'String' prints 6 times bcz we use i <= 5
while (i <= 5) {
    console.log("While Loop", i);
    i++;     // Outputs 5 times 'String'
}

// Output
// While Loop 1
// While Loop 2
// While Loop 3
// While Loop 4
// While Loop 5
//--------------------------------------------------------------------------

// Another Way 
console.log();

let a = 0;
while (a < 5) {    // we use a < 5 bcz a = 0 and we want 5 times print
    console.log("TypeScript", a);
    a++;
}

// Output
// TypeScript 0
// TypeScript 1
// TypeScript 2
// TypeScript 3
// TypeScript 4
//--------------------------------------------------------------------------
console.log();

// Print numbers from 1 to 5 using a while loop
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// Output
// 1
// 2
// 3
// 4
// 5
//--------------------------------------------------------------------------






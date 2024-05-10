////////////////////// CLASS ASSIGNMENT 08 //////////////////////

//This is the Assignment of Class 10

//Question: Read all Loops and do code of all loops.

// For Loops
// The for loop is used when you know the number of iterations required.
// For Loop have three steps:
// 1) Initialization.
// 2) Condition Check
// 3) Update

// for loop starting from 0
console.log("\nLoop starting 0");

for (let b = 0; b <= 5; b++) {
    console.log("TypeScript",b);
    // Outputs 6 times because b = 0
}
//--------------------------------------------------------------------------

// for loop starting from 1
console.log("\nLoop starting 1");

for (let a = 1; a <= 5; a++) {
    console.log("TypeScript",a); 
    // Outputs 5 times because a = 1
}

//--------------------------------------------------------------------------

console.log();

// Iterating over a string
const myName: string = "Khadim";
for (let k = 0; k < myName.length; k++) {
    console.log(myName[k]);   // Print each character in separate line
}
// This code initializes a string myString with the value 'Khadim' and then 
// uses a for loop to iterate over each character in the string and print it 
// to the console. 

//--------------------------------------------------------------------------

console.log();

// Iterating over a range of numbers
const start: number = 1;
const end: number = 5;

for (let i = start; i <= end; i++) {
    console.log(i);    // Print each number in separate line 
}
// This code initializes variables start and end with values 1 and 5 respectively, 
// and then uses a for loop to iterate over a range of numbers from start to end (inclusive) 
// and print each number to the console. 

//--------------------------------------------------------------------------

// For Loop in Array
// with (i < fruits.length)
console.log("\nLoop in Array");

const fruits: string[] = ["Apple", "Mango", "Grapes"];

for (let i = 0; i < fruits.length; i++) {
    console.log("My Fav Fruit is:", fruits[i]);
}
// Reason of not using (i <= fruits.length) in the loop condition:
// When i is equal to fruits.length (i.e., at the end of the array), 
// fruits[i] would attempt to access an element that doesn't exist (undefined) because 
// fruits.length is 3 and we want 3-1 = 2 indexes which is 0,1,2

// Output
// Loop in Array
// My Fav Fruit is: Apple
// My Fav Fruit is: Mango
// My Fav Fruit is: Grapes

//--------------------------------------------------------------------------

// For Loop in Array
// with (i <= vegetable.length -1)
console.log("\n");

const vegetables: string[] = ["Tomato", "Potato", "Onion"];

for (let i = 0; i <= vegetables.length - 1; i++) {
    console.log("My Fav Vegetable is:", vegetables[i]);
}
// Since array indices start at 0, the last valid index for an array of length n 
// would be n - 1. For example, in an array with 3 elements, the last valid index 
// would be 2 (3 - 1).

// Output
// My Fav Vegetable is: Tomato
// My Fav Vegetable is: Potato
// My Fav Vegetable is: Onion

//--------------------------------------------------------------------------

// Tables
console.log("\nTable of 5");

let tableNum: number = 5;
for (let t = 1; t <= 10; t++) {
    console.log(`${tableNum} * ${t} = ${tableNum*t}`);// Output in String format   
}        // Output   5 * 1 = 5
//--------------------------------------------------------------------------

console.log("\nTable of 6");

for (let t = 1; t <= 10; t++) {
    console.log(2, "*", t, "=", 2*t); // Output in Number and String format
}     // Output 6 * 1 = 6
//--------------------------------------------------------------------------

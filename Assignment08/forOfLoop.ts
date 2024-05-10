// for...of loop

// The for...of loop is used to iterate over iterable objects like arrays, strings,
// maps, sets, etc., and it provides a more concise syntax compared to traditional for loops.

// Syntax
// for (let item of iterable) {
//   // code to be executed
// }

// Iterate over an array using for...of loop
// String Array
let fruits1: string[] = ["Apple", "Bnana", "Orange"];
for (let fruit of fruits1) {
    console.log(fruit);
}
// Output
// Apple
// Bnana
// Orange
//--------------------------------------------------------------------------
console.log("\n");

// Numbers Array
let numbers: number[] = [1,2,3,4,5];
for (let nums of numbers) {
    console.log("fav num",nums);
}
// Output
// fav num 1
// fav num 2
// fav num 3
// fav num 4
// fav num 5
//--------------------------------------------------------------------------

console.log("\nIterating over a Map");

// Iterating over a Map
const myMap = new Map();
myMap.set("Key1", "Value1");
myMap.set("Key2", "Value2");
myMap.set("Key3", "Value3");

for (const [key, value] of myMap) {
    console.log(key, value);
}
// This code creates a Map myMap with key-value pairs and then uses a 
// for...of loop to iterate over each entry in the map, printing each 
// key-value pair to the console. 

// Output
// Key1 Value1
// Key2 Value2
// Key3 Value3

//--------------------------------------------------------------------------

console.log();

// Another Example of Map
const mySelf = new Map();
mySelf.set("Name", "Khadim");
mySelf.set("Age", "23");
mySelf.set("City", "Karachi");

for (let [key, value] of mySelf) {
    console.log(key, ":", value);
}
//--------------------------------------------------------------------------

console.log("\nIterating over a Set");

// Iterating over a Set
const mySet = new Set([1,2,3,4,5]);

for (const item of mySet) {
    console.log(item);
}
// This code initializes a Set mySet with values [1, 2, 3, 4, 5] and then uses 
// a for...of loop to iterate over each unique value in the set and print it to 
// the console. 

// Output 
// 1
// 2
// 3
// 4
// 5

//--------------------------------------------------------------------------

console.log();

const name1: string = "Khadim";

for (const char of name1) {
    console.log(char);
}       // Print each character from string in separate line

// Output
// K
// h
// a
// d
// i
// m

//--------------------------------------------------------------------------

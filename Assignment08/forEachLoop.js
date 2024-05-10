"use strict";
// For Each Loop
// Executes a provided function once for each array element.
// OR           Calls a function for each element in the array.
Object.defineProperty(exports, "__esModule", { value: true });
// Print the all elements from the Array
const fruits = ["Apple", "Mango", "Peach"];
fruits.forEach(fruits => console.log(`My Fav Fruit is: ${fruits}`));
// Output
// My Fav Fruit is: Apple
// My Fav Fruit is: Mango
// My Fav Fruit is: Peach
//--------------------------------------------------------------------------
console.log();
// Another Example
const fruits1 = ["Apple", "Mango", "Peach"];
fruits1.forEach(fruit => console.log(`My Fav Fruit is: ${fruits1}`));
// We use 'fruit' instead of 'fruits1' that's why
// It will print all the elements from the array in every print.
// Output
// My Fav Fruit is: Apple,Mango,Peach
// My Fav Fruit is: Apple,Mango,Peach
// My Fav Fruit is: Apple,Mango,Peach
//--------------------------------------------------------------------------
console.log();
// Printing elements from the Array
const cities = ["Karachi", "Lahore", "Islamabad"];
cities.forEach(cities => console.log(cities));
// Output
// Karachi
// Lahore
// Islamabad
//--------------------------------------------------------------------------
console.log();
// Printing elements from the Array of Numbers
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(numbers => console.log(numbers));
// Output
// 1
// 2
// 3
// 4
// 5
//--------------------------------------------------------------------------
console.log();
// Performing multiplication on every element in the array and printing the results
const nums = [1, 2, 3];
nums.forEach(nums => console.log(nums * 2));
// Output
// 2
// 4
// 6
//--------------------------------------------------------------------------
console.log();
// forEach with maps to iterate over key-value pairs
const mydata = new Map();
mydata.set("Name", "Khadim");
mydata.set("Age", "23");
mydata.set("Gender", "Male");
mydata.set("City", "Karachi");
mydata.forEach((key, value) => {
    console.log(`${key} : ${value}`);
});
// Output
// Khadim : Name
// 23 : Age
// Male : Gender
// Karachi : City
//--------------------------------------------------------------------------

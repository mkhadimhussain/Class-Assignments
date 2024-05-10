"use strict";
// Nested Loop
// Nested loops are essentially loops within loops. They are used when you need 
// to perform a repetitive task within another repetitive task. The inner loop 
// executes its entire cycle for each iteration of the outer loop. This pattern is 
// useful for working with multidimensional arrays, generating combinations, or 
// iterating over nested data structures.
Object.defineProperty(exports, "__esModule", { value: true });
// Here's an example of nested loops in TypeScript using a matrix (2D array) to print its elements:
// Define a 2D array (matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Matrix Length is 3
// Nested Loop to iterate over the matrix
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Matrix[${i}][${j}] = ${matrix[i][j]}`);
    }
}
// We start by defining a 2D array called matrix containing numbers.
// The outer loop for (let i = 0; i < matrix.length; i++) iterates over the rows 
// of the matrix using the index i.
// The inner loop for (let j = 0; j < matrix[i].length; j++) iterates over the columns 
// of each row using the index j.
// j < matrix[i].length;
// Inside the outer loop, matrix[i] is used to access each inner array.
// matrix[i].length gives the number of elements in the inner array corresponding to the current i value.
// When i is 0, matrix[i] is [1, 2, 3]; when i is 1, matrix[i] is [4, 5, 6]; and when i is 2, matrix[i] 
// is [7, 8, 9].
// Output:
// Matrix[0][0] = 1
// Matrix[0][1] = 2
// Matrix[0][2] = 3
// Matrix[1][0] = 4
// Matrix[1][1] = 5
// Matrix[1][2] = 6
// Matrix[2][0] = 7
// Matrix[2][1] = 8
// Matrix[2][2] = 9
// The output shows each element of the matrix along with its row and column indices. 
// This example demonstrates how nested loops can be used to iterate over a 2D array 
// or any nested data structure, performing operations or accessing elements at each 
// level of nesting.
//--------------------------------------------------------------------------
console.log();
// Printing Tables till 10
// Define the size of the multiplication table
const tableSize = 10; // For generating a multiplication table up to 10x10
// Nested Loops to generate the multiplication table
for (let i = 1; i <= tableSize; i++) { // Outer Loop
    console.log(`Table of ${i} \n`);
    for (let j = 1; j <= tableSize; j++) { // Inner Loop
        console.log(i, "*", j, "=", i * j); // It will print in number and string format
        // console.log(`${i} * ${j} = ${i*j}`); // It will print in string format only
    }
    console.log(); // Add an empty line after each table for better readability
}
// The outer loop for (let i = 1; i <= tableSize; i++) iterates over the multiplicands 
// (numbers being multiplied) from 1 to tableSize.
// The inner loop for (let j = 1; j <= tableSize; j++) iterates over the multipliers 
// (numbers used for multiplication) from 1 to tableSize.
// Outputs the Tables from 1 to 10 Tables
//--------------------------------------------------------------------------

////////////////////////////////// Assignment 12 //////////////////////////////////
// This is the Assignment of Class 14.
// Question: Learn and Practice Callback hell and how it works in asychronous programming and what
// is the advantages and disadvantages and how we overcome its mistakes/issues.
// Callback hell:
// Callback hell, also known as "pyramid of doom," refers to the situation in asynchronous
// programming where multiple nested callback functions become difficult to read and maintain.
// This is common in JavaScript and TypeScript when dealing with asynchronous operations such as
// API calls, file reading, or database queries.
// Explanation of Callback Hell
// When multiple asynchronous operations need to be performed in sequence, each subsequent operation
// is placed inside the previous operation's callback function. This nesting creates deep, triangular
// code structures that are hard to understand and manage. Here's an example in TypeScript to
// illustrate this:
function firstAsynchronous(callback) {
    setTimeout(() => {
        console.log('First operation complete');
        callback(null, 'Result of first operation');
    }, 1000);
}
function secondAsynchronous(callback) {
    setTimeout(() => {
        console.log("Second operation complete");
        callback(null, "Result of second operation");
    }, 1000);
}
function thirdAsynchronous(callback) {
    setTimeout(() => {
        console.log("Third operation complete");
        callback(null, "Result of third operation");
    }, 1000);
}
// Example of callback hell
firstAsynchronous((error, result) => {
    if (!error) {
        secondAsynchronous((error, result) => {
            if (!error) {
                thirdAsynchronous((error, result) => {
                    if (!error) {
                        console.log("All operations complete");
                    }
                    else {
                        console.log("Error in third operation", error);
                    }
                });
            }
            else {
                console.log("Error in second operation", error);
            }
        });
    }
    else {
        console.log("Error in first operation", error);
    }
});
export {};
//--------------------------------------------------------------------------------------------
// Avoiding Callback Hell
// To avoid callback hell, modern JavaScript and TypeScript offer several alternatives:
// 1- Promises:
// Promises provide a cleaner way to handle asynchronous operations. They allow chaining
// operations and better error handling.
// 2- Async/Await: 
// Async/Await syntax provides a way to write asynchronous code that looks synchronous,
// making it easier to read and write.
// Check the promises.ts file

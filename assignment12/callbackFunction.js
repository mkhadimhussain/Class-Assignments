// Callback Functions
// A callback function is a function that is passed as an argument to another function and
// is executed after some operation has been completed. Callbacks are widely used in asynchronous
// programming to handle tasks that may take some time to complete, such as reading files, making
// API calls, or performing database operations.
function greetings(name) {
    console.log("Hello Greetings");
    name();
}
function myName() {
    console.log("Khadim");
}
greetings(myName); // Passing the function in the argument, not the calling "()".
// Output:
// Hello Greetings
// Khadim
//-----------------------------------------------------------------------------------------
console.log();
function performOperator(a, b, callback) {
    const result = a + b;
    callback(result);
}
function displayResult(result) {
    console.log("Result: ", result);
}
// Calling performanceOperator with a callback function
performOperator(5, 3, displayResult);
//-----------------------------------------------------------------------------------------
console.log();
function favFruit(fruit) {
    console.log(`My favourite Fruit is: ${fruit()}`);
    // fruit();
}
function fruit() {
    let myFruit = ["Mango", "Apple"];
    return myFruit;
}
favFruit(fruit);
// Output:
// My favourite Fruit is: Mango
//-----------------------------------------------------------------------------------------
console.log();
function greet(teacher) {
    console.log("Hello Greetings!");
    console.log(`How are you? ${myTeacher()}`);
    // teacher();    // It will just print the "Welcome" in the end
}
function myTeacher() {
    console.log("Welcome");
    let a = "Sir";
    return a;
}
greet(myTeacher);
// Output:
// Hello Greetings!
// Welcome
// How are you? Sir
//-----------------------------------------------------------------------------------------
console.log();
// Array Iteration with Callbacks
// In this example, we'll use the built-in forEach method which accepts a callback function
// to iterate over an array.
const numbers = [1, 2, 3, 4, 5];
function printNumbers(num) {
    console.log(num);
}
// Using forEach to iterate over the array and print each number
numbers.forEach(printNumbers);
// Output:
// 1
// 2
// 3
// 4
// 5
//-----------------------------------------------------------------------------------------
console.log();
// Asynchronous Callback Example
function fetchData(callback) {
    setTimeout(() => {
        const data = "Fetched data";
        callback(data);
    }, 2000);
}
function handleData(data) {
    console.log("Received data: ", data);
}
// Calling fetchData with callback function
fetchData(handleData);
export {};
// Output:
// Received data:  Fetched data  (after 2 seconds)

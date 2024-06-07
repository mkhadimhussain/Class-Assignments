// Asynchronous Programming:
// - In asynchronous programming, tasks can be executed independently of each other.
// - It allows other tasks to run while waiting for some operations to complete (e.g.,
//   I/O operations, network requests).
// - It helps in improving the performance and responsiveness of the program.
// First of all the whole sychronous code will be executed and after execution of all the synchronous
// code then the asynchronous code will be executed.
console.log("First");
setTimeout(() => {
    console.log("Second");
}, 1000);
console.log("Third");
// Output:
// First
// Third
// Second   (after 1 sec)
//--------------------------------------------------------------------------------------
console.log();
console.log("First");
for (let i = 1; i <= 10; i++) { // if i <= 100000 then it will executed first then completly
    console.log("Second"); // then the asynchronus code
}
setTimeout(() => {
    console.log("Third");
}, 0);
console.log("Fourth");
// Output:
// First
// Second
// Second
// Second
// Second
// Second
// Second
// Second
// Second
// Second
// Second
// Fourth
// Third
//--------------------------------------------------------------------------------------
console.log();
console.log("First");
setTimeout(() => {
    console.log("Second");
}, 0);
setTimeout(() => {
    console.log("Third");
}, 0);
console.log("Fourth");
// Output:
// First
// Fourth
// Second
// Third
//--------------------------------------------------------------------------------------
console.log();
console.log("First");
setTimeout(() => {
    console.log("Second");
}, 1000);
setTimeout(() => {
    console.log("Third");
}, 0);
console.log("Fourth");
export {};
// Output:
// First
// Fourth
// Third
// Second   (after 1 sec)
//--------------------------------------------------------------------------------------

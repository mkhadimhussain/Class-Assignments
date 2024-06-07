// Synchronous Programming:
// - In synchronous programming, tasks are executed one after another, sequentially.
// - Each task must complete before the next one begins.
// - If one task takes a long time to complete, the subsequent tasks have to wait,
//   potentially causing a delay or blocking the execution.
console.log("First");
console.log("Second");
console.log("Third");
// Output:
// First
// Second
// Third
//-----------------------------------------------------------------------------
console.log();
console.log("First");
for (let i = 1; i <= 10; i++) {
    console.log("Second");
}
console.log("Third");
export {};
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
// Third
//-----------------------------------------------------------------------------

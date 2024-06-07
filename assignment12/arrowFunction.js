// Arrow Functions
// Arrow functions are a more concise syntax for writing function expressions in TypeScript
// (and JavaScript). They were introduced in ES6 and provide a shorter syntax compared to
// traditional function expressions. Arrow functions also have lexical this binding, meaning
// they inherit this from the surrounding context, which can be particularly useful in some
// scenarios, such as event handling and object methods.
const add = (a, b) => {
    return a + b;
};
console.log(add(1, 6)); // Output: 7
// Implicit return (when there is only one expression in the function body)
const add1 = (a, b) => a + b;
console.log(add1(5, 5)); // Output: 10
//-------------------------------------------------------------------------------------------
const double = (n) => n * 2;
console.log(double(3)); // Output: 6
//-------------------------------------------------------------------------------------------
// Example of Using an Arrow Function as a Callback:
function fetchData(callback) {
    setTimeout(() => {
        const data = "Some fetch data";
        callback(data); // Executing the callback with the fetched data
    }, 2000);
}
fetchData((data) => {
    console.log("Data receeived: ", data);
});
export {};
// Output:
// Data receeived:  Some fetch data (after 2 seconds)

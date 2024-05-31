// Function Overload

// Function overloads allow you to define multiple signatures (overloads/structures) for a single function,
// enabling the function to handle different argument types.

// Overlaod 1
function hello(message: string): string;
// Overload 2
function hello(message: number):number;

// Actual function implementation
function hello(message: any): any {
    return message;
}
console.log(hello("Khadim"));  // Output: Khadim
console.log(hello(234));       // Output: 234

// console.log(hello(true));   // Error because we define the overload for 'string' and 'number' only

//--------------------------------------------------------------------------------------------------------

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;

function combine(a: any, b: any): any {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    throw new Error("Invalid arguments");
}
console.log(combine(3, 5));               // Output: 8
console.log(combine("Hello ", "World"));  // Output: Hello World

// console.log(combine(true, false));  // Error not accepting boolean

//--------------------------------------------------------------------------------------------------------

// Function Overload
// Actual function implementation
function hello(message) {
    return message;
}
console.log(hello("Khadim")); // Output: Khadim
console.log(hello(234)); // Output: 234
function combine(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    throw new Error("Invalid arguments");
}
console.log(combine(3, 5)); // OutputL 
console.log(combine("Hello ", "World")); // Output: 
// console.log(combine(true, false));  // Error not accepting boolean

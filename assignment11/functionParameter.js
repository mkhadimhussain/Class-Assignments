// Function Parameters
// Default Parameter
// Default parameters allow you to initialize function parameters with default values if no
// arguments are provided.
function greet(name) {
    if (name === void 0) { name = "User"; }
    console.log("Hello, ".concat(name));
}
greet(); // Output: Hello, User
greet("Khadim"); // Output: Hello, Khadim
// If name is not provided, it defaults to "User".
//--------------------------------------------------------------------------------------------
function greet1(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello, ".concat(name);
}
console.log(greet1()); // Output: 
console.log(greet1("Khadim")); // Output: 

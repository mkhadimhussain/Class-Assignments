// Function Parameters

// Default Parameter
// Default parameters allow you to initialize function parameters with default values if no
// arguments are provided.

function greet(name: string = "User") {
    console.log(`Hello, ${name}`);
}
greet();          // Output: Hello, User
greet("Khadim");  // Output: Hello, Khadim

// If name is not provided, it defaults to "User".

//--------------------------------------------------------------------------------------------

function greet1(name: string = "Guest") {
    return `Hello, ${name}`;
}
console.log(greet1());          // Output: Hello, Guest
console.log(greet1("Khadim"));  // Output: Hello, Khadim

//--------------------------------------------------------------------------------------------

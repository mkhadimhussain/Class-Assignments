// Optional Parameter
// Optional parameters allow you to call a function without providing all arguments.
// OR
// An optional parameter allows you to call a function without passing that argument.
function greet(name) {
    console.log("Hello, ".concat(name));
}
;
greet(); // Output: Hello, undefined
greet("Khadim"); // Output: Hello, Khadim
// The name parameter is optional and can be omitted when calling the function.
//---------------------------------------------------------------------------------------
function greet1(name) {
    console.log("Hello, ".concat(name || "Guest"));
}
greet1(); // Output: Hello, Guest
greet1("Khadim"); // Output: Hello, Khadim
//---------------------------------------------------------------------------------------
function greet2(name) {
    return "Hello, ".concat(name || "User");
}
console.log(greet2()); // Output: Hello, User
console.log(greet2("Khadim")); // Output: Hello, Khadim
//---------------------------------------------------------------------------------------

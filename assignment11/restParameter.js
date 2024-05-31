// Rest Parameter
// Rest parameters allow a function to accept an indefinite number of arguments as an array.
function greet() {
    var teachers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        teachers[_i] = arguments[_i];
    }
    console.log("Hello, ".concat(teachers));
}
greet("Sir Okasha", "Sir Asharib", "Sir Ubaid");
// Output: Hello, Sir Okasha,Sir Asharib,Sir Ubaid
//---------------------------------------------------------------------------------------------
function myHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    console.log(hobbies); // Shows array
}
myHobbies("Coding", "Photography", "Editing"); // Output: [ 'Coding', 'Photography', 'Editing' ]
//---------------------------------------------------------------------------------------------
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log((sum(2, 4, 6, 8))); // Output: 20
// The callback function (total, num) => total + num takes two parameters:
// 1. total: The accumulator that accumulates the result of the callback function.
// 2. num: The current element being processed in the array.
// For each element in the array, the callback function adds the current element (num) to the
// accumulated value (total), resulting in the sum of all elements.
//---------------------------------------------------------------------------------------------
function nums() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    console.log(numbers); // Shows array
}
nums(1, 2, 3, 4, 5); // Output: [ 1, 2, 3, 4, 5 ]
//---------------------------------------------------------------------------------------------
function printt() {
    var write = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        write[_i] = arguments[_i];
    }
    console.log("".concat(write + , " "));
}
printt("khadim", 23, true); // Output: khadim,23,true

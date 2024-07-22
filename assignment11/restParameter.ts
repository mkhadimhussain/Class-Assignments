// Rest Parameter

// Rest parameters allow a function to accept an indefinite number of arguments as an array.

function greet(...teachers: string[]) {
    console.log(`Hello, ${teachers}`);
}
greet("Sir Okasha", "Sir Asharib", "Sir Ubaid");
// Output: Hello, Sir Okasha,Sir Asharib,Sir Ubaid

//---------------------------------------------------------------------------------------------

function myHobbies(...hobbies: string[]) {
    console.log(hobbies);     // Shows array
}
myHobbies("Coding", "Photography", "Editing");  // Output: [ 'Coding', 'Photography', 'Editing' ]

//---------------------------------------------------------------------------------------------

function sum(...numbers: number[]) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3,4,5));  // Output: 15
console.log((sum(2,4,6,8)));  // Output: 20

// The callback function (total, num) => total + num takes two parameters:
// 1. total: The accumulator that accumulates the result of the callback function.
// 2. num: The current element being processed in the array.
// initial value 0

// For each element in the array, the callback function adds the current element (num) to the
// accumulated value (total), resulting in the sum of all elements.

//---------------------------------------------------------------------------------------------

function nums(...numbers: number[]) {
    console.log(numbers);   // Shows array
}
nums(1,2,3,4,5);  // Output: [ 1, 2, 3, 4, 5 ]

//---------------------------------------------------------------------------------------------

// Creating my own function which accept multiple arguments and log it. (Sir Okasha's Assignment)

function printt(...write: any[]) {
    console.log(`${write}`);
}
printt("khadim", 23, true);  // Output: khadim,23,true

//---------------------------------------------------------------------------------------------

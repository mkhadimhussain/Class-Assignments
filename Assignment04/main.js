////////////////////// CLASS ASSIGNMENT 04 //////////////////////
//This is the Assignment of Class 06
//Question: Make a program using Function with multiple arguments and also use if else statements in it.
//Defined the function with a name "addNumbers" that takes two parameters and return their sum. 
function addNumbers(num1, num2) {
    return num1 + num2;
}
//Defined the function that checks if a number is Even or Odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even.";
    }
    else {
        return "Odd.";
    }
}
//Invoking the function with arguments
var result1 = addNumbers(5, 3);
console.log("Sum: ".concat(result1));
var result2 = checkEvenOdd(10);
console.log("Number 10 is:", result2);
var result3 = checkEvenOdd(7);
console.log("Number 7 is: ".concat(result2));
//ANOTHER PROGRAM
console.log("\n Another Example");
//Defined the function that take two parameters
function compareNumber(num3, num4) {
    //check if num3 is greater than num4
    if (num3 > num4) {
        return "".concat(num3, " is Greater than ").concat(num4);
    }
    //check if num3 is smaller than num4
    else if (num3 < num4) {
        return "".concat(num3, " is Smaller than ").concat(num4);
    }
    //if num3 is neither greater nor smaller, it must be equal to num4
    else {
        return "".concat(num3, " is Equal to ").concat(num4);
    }
}
//calls the function with different arguments and log the result
console.log(compareNumber(2, 8));
console.log(compareNumber(20, 5));
console.log(compareNumber(3, 3));

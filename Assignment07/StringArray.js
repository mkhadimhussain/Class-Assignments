////////////////////// CLASS ASSIGNMENT 07 //////////////////////
//This is the Assignment of Class 09
//Question: Read and Practice Arrays Methods.
// Defining array
var fruits = ["Apple", "Banana", "Grapes"];
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Grapes' ]
// Accessing Element by thier Index
console.log(fruits[1]); // Output: Banana
// ARRAYS METHODS
// push() => Adds one or more elements to the end of the array.
fruits.push("Mango");
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Grapes', 'Mango' ]
//------------------------------------------------------------------------------------------
// pop() => Removes the last element from the array.
fruits.pop();
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Grapes' ]
//------------------------------------------------------------------------------------------
// unshift() => Adds one or more elements to the beginning of the array.
fruits.unshift("Orange", "Mango");
console.log(fruits); // Output: [ 'Orange', 'Mango', 'Apple', 'Banana', 'Grapes' ]
//------------------------------------------------------------------------------------------
// shift() => Removes the first element from the array.
fruits.shift();
console.log(fruits); // Output: [ 'Mango', 'Apple', 'Banana', 'Grapes' ]
//------------------------------------------------------------------------------------------
// splice() => Add or remove elements from the array.
// splice(start: number, deleteCount: number, ...items: string[])
fruits.splice(1, 1, "Orange"); // Remove 1 element at index 1 and add "Orange"
console.log(fruits); // Output: [ 'Mango', 'Orange', 'Banana', 'Grapes' ]
//------------------------------------------------------------------------------------------
// slice() => Extracts a section of an array and returns a new array.
var slicedArray = fruits.slice(1, 3);
console.log(slicedArray); // Output: [ 'Apple', 'Banana' ]
// 1 to 3 => element on index 1 to less then 3.
// on index 1 there are 'Apple' and on index 2 ther are 'Banana'
//------------------------------------------------------------------------------------------
// concat() => Combines two or more arrays and returns a new array.
var fruits2 = ["Pine Apple", "Water Melon"]; // new array
var allFruits = fruits.concat(fruits2); // concating both arrays
console.log(allFruits); // Output: [ 'Mango', 'Orange', 'Banana', 'Grapes', 'Pine Apple', 'Water Melon' ]
//------------------------------------------------------------------------------------------
// filter() => Creates a new array with elements that pass a test.
var filterArray = fruits.filter(function (fruits) { return fruits === "Banana"; });
// Filter all elements which are equal to "Banana"
console.log(filterArray); // Output: [ 'Banana' ]
//------------------------------------------------------------------------------------------
// map() => Creates a new array by applying a provided function on every element in the array.
var adding1 = fruits.map(function (fruits) { return fruits + 1; });
console.log(adding1); // Output: [ 'Mango1', 'Orange1', 'Banana1', 'Grapes1' ]
//------------------------------------------------------------------------------------------
// every() => Checks if all elements in the array satisfy a condition, if yes then return true else false.
var allFruitsAreApple = fruits.every(function (fruits) { return fruits === "Apple"; });
// Check every elements of the fruits array are equal to Apple?
console.log(allFruitsAreApple); // Output: false
//------------------------------------------------------------------------------------------
// some() => Checks if at least one element in the array satisfies a condition, if yes then return true else false.
var checkingOrange = fruits.some(function (fruits) { return fruits === 'Orange'; });
// check 'orange' are in a fruits?
console.log(checkingOrange); // Output: true
//------------------------------------------------------------------------------------------
// forEach() => Executes a provided function once for each array element.
// OR           Calls a function for each element in the array.
fruits.forEach(function (fruits) { return console.log("I like ".concat(fruits)); });
// Output:
// I like Mango
// I like Orange
// I like Banana
// I like Grapes
//------------------------------------------------------------------------------------------
// indexOf() => Returns the index of the first occurrence of a value in the array, or -1 if none is found.
var index = fruits.indexOf('Grapes');
console.log(index); // Output: 3    (first occurrence 'Grapes' is on index 3)
// Trying that element which is not present in the array.
var index1 = fruits.indexOf('Peach'); // Peach is not in the fruits array
console.log(index1); // Output: -1  (bcz 'Peach' is not in the array)
//------------------------------------------------------------------------------------------
//lastIndexOf() => Returns the index of the last occurrence of a value in the array, or -1 if none is found.
var doubleApple = ["Apple", "Mango", "Apple"];
var lastIndex = doubleApple.lastIndexOf("Apple");
console.log(lastIndex); // Output: 2  (Last occurrence of 'Apple' is on index 2)
// Trying that element which is not present in the array
var lastIndex1 = doubleApple.lastIndexOf("Orange");
console.log(lastIndex1); // Output: -1 (bcz 'Orange' is not in the array)
//------------------------------------------------------------------------------------------
// join() => Joins all elements of an array into a string.
var joinedString = fruits.join(", ");
console.log(joinedString); // Output: Mango, Orange, Banana, Grapes
// Trying another example
var joinedString1 = fruits.join(" | ");
console.log(joinedString1); // Output: Mango | Orange | Banana | Grapes
//------------------------------------------------------------------------------------------
// toString() => Converts the array to a string representation.
var stringRepresentation = fruits.toString();
console.log(stringRepresentation); // Output: Banana,Grapes,Mango,Orange
//------------------------------------------------------------------------------------------
// reduce() => Reduces the array to a single value using a function.(from left to right)
var sumOfFruits = fruits.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, '');
// accumulator = which accumulates the result
// currentValue = the current element being processed in the array
// 0 = initial value of the accumulator 
console.log(sumOfFruits); // Output: MangoOrangeBananaGrapes
//------------------------------------------------------------------------------------------
// reduceRight() => Similar to reduce(), but processes the array from right to left.
var reversedSum = fruits.reduceRight(function (accumulator, currentValue) { return accumulator + currentValue; }, '');
console.log(reversedSum); // Output: GrapesBananaOrangeMango
//------------------------------------------------------------------------------------------
// reverse() => Reverses the order of elements in the array.
fruits.reverse();
console.log(fruits); // Output: [ 'Grapes', 'Banana', 'Orange', 'Mango' ]
//------------------------------------------------------------------------------------------
// sort() => Sorts the elements of the array. (here in Ascending order)
fruits.sort();
console.log(fruits); // Output: [ 'Banana', 'Grapes', 'Mango', 'Orange' ]
//------------------------------------------------------------------------------------------

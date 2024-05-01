////////////////////// CLASS ASSIGNMENT 07 //////////////////////
//This is the Assignment of Class 09
//Question: Read and Practice Arrays Methods.
// Defining Array
var numbers = [1, 2, 3, 4, 5];
console.log(numbers); // output: [ 1, 2, 3, 4, 5 ]
// Accessing element by their Index
console.log(numbers[3]);
// ARRAYS METHODS
//------------------------------------------------------------------------------------------
// push() => Adds one or more elements to the end of the array.
numbers.push(6);
console.log(numbers); // output: [ 1, 2, 3, 4, 5, 6 ]
//------------------------------------------------------------------------------------------
// pop() => Removes the last element from the array.
numbers.pop();
console.log(numbers); // output: [ 1, 2, 3, 4, 5 ]
//------------------------------------------------------------------------------------------
// unshift() => Adds one or more elements to the beginning of the array.
numbers.unshift(7);
console.log(numbers); // output: [ 7, 1, 2, 3, 4, 5 ]
//------------------------------------------------------------------------------------------
// shift() => Removes the first element from the array.
numbers.shift();
console.log(numbers); // output: [ 1, 2, 3, 4, 5 ]
//------------------------------------------------------------------------------------------
// splice() => Add or removes elements form the array.
// splice(start: number, deleteCount: number, ...items: string[])
numbers.splice(1, 2, 6); // remove 1 element at index of 2 and add 6.
console.log(numbers); // output: [ 1, 6, 4, 5 ]
//------------------------------------------------------------------------------------------
// slice() => Extracts a section of an array and returns a new array.
var slicedNums = numbers.slice(1, 4);
console.log(slicedNums); // output: [ 2, 3, 4 ]
//------------------------------------------------------------------------------------------
// concat() => Combines two or more arrays and returns a new array.
var numbers1 = [8, 9];
var allNum = numbers.concat(numbers1);
console.log(allNum); // output: [ 1, 6, 4, 5, 8, 9 ]
// Concatinating three arrays
var numbers2 = [10, 11];
var allNum1 = numbers.concat(numbers1, numbers2);
console.log(allNum1); // output: [ 1, 6, 4, 5, 8, 9, 10, 11 ]
//------------------------------------------------------------------------------------------
// filter() => Creates a new array with elements that pass a test.
var evenNumbes = numbers.filter(function (numbers) { return numbers % 2 === 0; });
console.log(evenNumbes); // output: [ 6, 4 ]
//------------------------------------------------------------------------------------------
// map() => Creates a new array by applying a provided function on every element in the array.
var doubleNumbers = numbers.map(function (num) { return num * 2; });
console.log(doubleNumbers); // output: [ 2, 12, 8, 10 ]
//------------------------------------------------------------------------------------------
// every() => Checks if all elements in the array satisfy a condition, if yes then return true else false.
var allEven = numbers.every(function (numbers) { return numbers % 2 === 0; });
console.log(allEven); // output: false
//------------------------------------------------------------------------------------------
// some() => Checks if at least one element in the array satisfies a condition, if yes then return true else false.
var hasEvenNumber = numbers.some(function (numbers) { return numbers % 2 === 0; });
console.log(hasEvenNumber); // output: true
//------------------------------------------------------------------------------------------
// forEach() => Executes a provided function once for each array element.
// OR           Calls a function for each element in the array.
numbers.forEach(function (numbers) { return console.log("Num ".concat(numbers)); });
// output:
// Num 1
// Num 6
// Num 4
// Num 5
//------------------------------------------------------------------------------------------
// indexOf() => Returns the index of the first occurrence of a value in the array, or -1 if none is found.
var index2 = numbers.indexOf(4);
console.log(index2); // Output: 2   (first occurrence of 3 is on 2 in the array)
// Trying another element which is not present in the array
var index3 = numbers.indexOf(7);
console.log(index3); // Output: -1  (bcz 7 is not in the array)
//------------------------------------------------------------------------------------------
// lastIndexOf() => Returns the index of the last occurrence of a value in the array, or -1 if none is found.
var repeatedNumArray = [1, 3, 4, 5, 2, 3];
var lastIndex2 = repeatedNumArray.lastIndexOf(3);
console.log(lastIndex2); // output: 5
// Trying another element which is not present in the array
var lastindex3 = repeatedNumArray.lastIndexOf(6);
console.log(lastindex3); // output: -1  (bcz 6 is not in the array)
//------------------------------------------------------------------------------------------
// join() => Joins all elements of an array into a string.
var joinedNumbers = numbers.join(",");
console.log(joinedNumbers); // output: 1,6,4,5
// Trying another example of join()
var joinedNumbers1 = numbers.join("|");
console.log(joinedNumbers1); // output: 1|6|4|5
//------------------------------------------------------------------------------------------
// toString() => Converts the array to a string representation.
var stringRepresentation1 = numbers.toString();
console.log(stringRepresentation1); // output: 1,6,4,5
//------------------------------------------------------------------------------------------
// reduce() => Reduces the array to a single value using a function.(from left to right)
var sum = numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
// accumulator = which accumulates the result of each iteration
// currentValue = the current element being processed in the array
// 0 = initial value of the accumulator
console.log(sum); // output: 16  (1+6+4+5)
//------------------------------------------------------------------------------------------
// reduceRight() => Similar to reduce(), but processes the array from right to left.
var reverseSum = numbers.reduceRight(function (acc, curr) { return acc + curr; }, 0);
console.log(reverseSum); // output: 16  (5+4+6+1)
//------------------------------------------------------------------------------------------
// reverse() => Reverses the order of elements in the array.
numbers.reverse();
console.log(numbers); // output: [ 5, 4, 6, 1 ]
//------------------------------------------------------------------------------------------
// sort() => Sorts the elements of the array. (in 1,2,3,4 format)
numbers.sort();
console.log(numbers); // output: [ 1, 4, 5, 6 ]
//------------------------------------------------------------------------------------------

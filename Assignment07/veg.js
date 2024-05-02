"use strict";
/////////////// Arrays Methods In Modules ///////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortMethod = exports.reverseMethod = exports.reduceRightMethod = exports.reduceMethod = exports.toStringMethod = exports.joinMethod = exports.lastIndexOfMethod = exports.indexOfMethod = exports.forEachMethod = exports.someMethod = exports.everyMethod = exports.mapMethod = exports.filterMethod = exports.concatMethod = exports.sliceMehtod = exports.spliceMethod = exports.shiftMethod = exports.unshiftMethod = exports.popMethod = exports.pushMethod = exports.accessByIndex = exports.vegetables = void 0;
exports.vegetables = ["Potato", "Tomato", "Onion", "Mint"];
// Accessing Element by thier Index
exports.accessByIndex = exports.vegetables[2];
// push() => Adds one or more elements to the end of the array.
function pushMethod() {
    exports.vegetables.push("Carrot");
    return exports.vegetables;
}
exports.pushMethod = pushMethod;
// pop() => Removes the last element from the array.
function popMethod() {
    exports.vegetables.pop();
    return exports.vegetables;
}
exports.popMethod = popMethod;
// unshift() => Adds one or more elements to the beginning of the array.
function unshiftMethod() {
    exports.vegetables.unshift("Chilli");
    return exports.vegetables;
}
exports.unshiftMethod = unshiftMethod;
// shift() => Removes the first element from the array.
function shiftMethod() {
    exports.vegetables.shift();
    return exports.vegetables;
}
exports.shiftMethod = shiftMethod;
// splice() => Add or remove elements from the array.
function spliceMethod() {
    // splice(start: number, deleteCount: number, ...items: string[])
    exports.vegetables.splice(3, 1, "Garlic");
    return exports.vegetables;
}
exports.spliceMethod = spliceMethod;
// slice() => Extracts a section of an array and returns a new array.
function sliceMehtod() {
    var slicedArray = exports.vegetables.slice(1, 3);
    return slicedArray;
}
exports.sliceMehtod = sliceMehtod;
// concat() => Combines two or more arrays and returns a new array.
function concatMethod() {
    var vegetables1 = ["Red Chilli", "Pumpkin"];
    var allVegetables = exports.vegetables.concat(vegetables1);
    return allVegetables;
}
exports.concatMethod = concatMethod;
// filter() => Creates a new array with elements that pass a test.
function filterMethod() {
    var filterOnion = exports.vegetables.filter(function (vegetable) { return vegetable === "Onion"; });
    // Filter all elements which are equal to "Onion"
    return filterOnion;
}
exports.filterMethod = filterMethod;
// map() => Creates a new array by applying a provided function on every element in the array.
function mapMethod() {
    var adding1ToVeg = exports.vegetables.map(function (vegetable) { return vegetable + 1; });
    return adding1ToVeg;
}
exports.mapMethod = mapMethod;
// every() => Checks if all elements in the array satisfy a condition, if yes then return true else false.
function everyMethod() {
    var checkAllVegAreTomato = exports.vegetables.every(function (vegetable) { return vegetable === "Tomato"; });
    // Check every elements of the vegetables array are equal to "Tomato"?
    return checkAllVegAreTomato;
}
exports.everyMethod = everyMethod;
// some() => Checks if at least one element in the array satisfies a condition, if yes then return true else false.
function someMethod() {
    var checkOneVegAreTomato = exports.vegetables.some(function (vegetable) { return vegetable === "Tomato"; });
    // check 'Tomato' are in a Vegetables?
    return checkOneVegAreTomato;
}
exports.someMethod = someMethod;
;
// forEach() => Executes a provided function once for each array element.
// OR           Calls a function for each element in the array.
function forEachMethod() {
    exports.vegetables.forEach(function (vegetable) { return console.log("I Like ".concat(vegetable)); });
    return;
}
exports.forEachMethod = forEachMethod;
;
// indexOf() => Returns the index of the first occurrence of a value in the array, or -1 if none is found.
function indexOfMethod() {
    var index = exports.vegetables.indexOf("Garlic");
    return index;
}
exports.indexOfMethod = indexOfMethod;
//lastIndexOf() => Returns the index of the last occurrence of a value in the array, or -1 if none is found.
function lastIndexOfMethod() {
    var doublePotato = ["Potato", "Onion", "Potato"];
    var lastIndex = doublePotato.lastIndexOf("Potato");
    return lastIndex;
}
exports.lastIndexOfMethod = lastIndexOfMethod;
// join() => Joins all elements of an array into a string.
function joinMethod() {
    var joinedVegetables = exports.vegetables.join(", ");
    return joinedVegetables;
}
exports.joinMethod = joinMethod;
// toString() => Converts the array to a string representation.
function toStringMethod() {
    var stringRepresentation = exports.vegetables.toString();
    return stringRepresentation;
}
exports.toStringMethod = toStringMethod;
// reduce() => Reduces the array to a single value using a function.(from left to right)
function reduceMethod() {
    var reducedSum = exports.vegetables.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, '');
    // accumulator = which accumulates the result
    // currentValue = the current element being processed in the array
    // '' = initial value of the accumulator (empty)
    return reducedSum;
}
exports.reduceMethod = reduceMethod;
// reduceRight() => Similar to reduce(), but processes the array from right to left.
function reduceRightMethod() {
    var reversedSum = exports.vegetables.reduceRight(function (acc, curr) { return acc + curr; }, '');
    return reversedSum;
}
exports.reduceRightMethod = reduceRightMethod;
// reverse() => Reverses the order of elements in the array.
function reverseMethod() {
    return exports.vegetables.reverse();
}
exports.reverseMethod = reverseMethod;
// sort() => Sorts the elements of the array. (here in Ascending order)
function sortMethod() {
    return exports.vegetables.sort();
}
exports.sortMethod = sortMethod;

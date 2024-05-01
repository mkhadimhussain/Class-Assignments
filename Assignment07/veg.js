"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatMethod = exports.sliceMehtod = exports.spliceMethod = exports.shiftMethod = exports.unshiftMethod = exports.popMethod = exports.pushMethod = exports.accessByIndex = exports.vegetables = void 0;
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

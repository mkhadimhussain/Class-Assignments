// Const Enum
// const enum is a special kind of enumeration that is optimized for performance by being inlined at
// compile time. This means that the enum values are replaced with their actual values during compilation,
// resulting in more efficient and smaller JavaScript code. This is in contrast to regular enums, which
// create an object to map between the enum names and values.
// Regular Enum
// A regular enum in TypeScript creates a JavaScript object at runtime to store the mappings between enum
// names and values.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var direction = Direction.Up;
console.log(direction); // Output: 0
var direction1 = 0 /* Direction1.Up */;
console.log(direction1); // Output: 0
// The compiled JavaScript code for this const enum looks like this:
// "use strict";
// var direction1 = 0 /* Direction.Up */;
// console.log(direction1); // Output: 0
// Notice how the enum usage is replaced directly with the corresponding value (0 in this case).
// Now we are going to check this
var direction2 = [
    0 /* Direction1.Up */,
    1 /* Direction1.Down */,
    2 /* Direction1.Left */,
    3 /* Direction1.Right */,
];
// The compiled JavaScript code for this
// var direction2 = [
//     0 /* Direction1.Up */,
//     1 /* Direction1.Down */,
//     2 /* Direction1.Left */,
//     3 /* Direction1.Right */,
// ];
//------------------------------------------------------------------------------------------
console.log();
var value1 = 3 /* Abc.B */;
var value2 = 3 /* Abc.C */;
console.log(value1); // Output: 3
console.log(value2); // Output: 3
;
var todayWeather = "Cold Weather" /* Weather.Today */;
console.log(todayWeather); // Output: Cold Weather
// The compiled JavaScript code for this
// var todayWeather = "Cold Weather" /* Weather.Today */;
// console.log(todayWeather); // Output: Cold Weather

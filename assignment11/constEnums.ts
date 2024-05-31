// Const Enum

// const enum is a special kind of enumeration that is optimized for performance by being inlined at
// compile time. This means that the enum values are replaced with their actual values during compilation,
// resulting in more efficient and smaller JavaScript code. This is in contrast to regular enums, which
// create an object to map between the enum names and values.

// Regular Enum

// A regular enum in TypeScript creates a JavaScript object at runtime to store the mappings between enum
// names and values.
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
let direction: Direction = Direction.Up;
console.log(direction);   // Output: 0

// The compiled JavaScript code for this enum looks like this:
// "use strict";
// var Direction;
// (function (Direction) {
//     Direction[Direction["Up"] = 0] = "Up";
//     Direction[Direction["Down"] = 1] = "Down";
//     Direction[Direction["Left"] = 2] = "Left";
//     Direction[Direction["Right"] = 3] = "Right";
// })(Direction || (Direction = {}));
// var direction = Direction.Up;
// console.log(direction); // Output: 0

// Const Enum

// A const enum in TypeScript is inlined at compile time, meaning the enum values are directly replaced
// by their corresponding numeric values or string values. This results in no runtime representation of
// the enum, thus reducing the generated code size and improving performance.

const enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}
let direction1: Direction1 = Direction1.Up;
console.log(direction1);   // Output: 0

// The compiled JavaScript code for this const enum looks like this:

// "use strict";
// var direction1 = 0 /* Direction.Up */;
// console.log(direction1); // Output: 0

// Notice how the enum usage is replaced directly with the corresponding value (0 in this case).

// Now we are going to check this
let direction2 = [
    Direction1.Up,
    Direction1.Down,
    Direction1.Left,
    Direction1.Right,
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

const enum Abc {
    A = 1,
    B = A + 2,
    C = B * 1,
}
let value1: Abc = Abc.B;
let value2: Abc = Abc.C;

console.log(value1);  // Output: 3
console.log(value2);  // Output: 3

// The compiled JavaScript code for this

// var value1 = 3 /* Abc.B */;
// var value2 = 3 /* Abc.C */;
// console.log(value1); // Output: 3
// console.log(value2); // Output: 3

//------------------------------------------------------------------------------------------

const enum Weather {
    Yesterday = 'Hot Weather',
    Today = 'Cold Weather',
    Tommoro = 'Rainy Weather',
};
let todayWeather: Weather = Weather.Today;
console.log(todayWeather);  // Output: Cold Weather

// The compiled JavaScript code for this

// var todayWeather = "Cold Weather" /* Weather.Today */;
// console.log(todayWeather);   // Output: Cold Weather

//------------------------------------------------------------------------------------------

////////////////////////////////// Assignment 10 //////////////////////////////////
//This is the Assignment of Class 12
//Question: Practice Structural Typing.
// Structural Typing:
// In TypeScript, two types are considered to be the same if they have the same shape.
// TypeScript uses structural typing, meaning that types are compatible if their structure
// matches. This is also known as "duck typing."
// This is in contrast to nominal typing, which considers types to be different if they
// have different names, even if they have the same structure.
// Fresh Objects:
// Directly assigned object literals, rigorously checked for exact type conformance.
// Stale Objects:
// Objects assigned to variables before being assigned to a type, allowing extra
// properties as long as required ones are present.
//-------------------------------------------------------------------------------------------
// Structural Typing Examples
var ball = {
    diameter: 10,
};
var sphere = {
    diameter: 20,
};
var tube = {
    diameter: 30,
    radius: 15,
};
sphere = ball; // Stale Object
ball = sphere; // Stale Object
console.log(ball); // { diameter: 10 } 
console.log(sphere); // { diameter: 10 } because ball is assigned to sphere
// Defining new property in sphere
sphere = {
    diameter: 40,
    // length: 45,   // Shows Error because it's structure have one property and we
    // are making a Fresh Object
};
// Assigning tube to sphere
sphere = tube; // No Error while tube have two properties it's because of Stale Object
// In Stale Object TypeScript allows extra properties
// Assigning tube to ball
ball = tube; // also no Error while tube have two properties it's because of Stale Object
// In Stale Object TypeScript allows extra properties
console.log(ball); // { diameter: 30, radius: 15 }
var p = { x: 10, y: 20 }; // Frest Object
var c = p; // Stale Object
// This is allowed because Point and Coordinate have the same structure.
console.log(c); // { x: 10, y: 20 }
function greet(person) {
    console.log("Hello, ".concat(person.name));
}
var employee = {
    name: 'Tahir',
    age: 32,
    employeeId: 111,
};
greet(employee); // Output: Hello, Tahir
var myDog = { name: "Buddy", age: 5, breed: "Golden Retriever" };
var myAnimal = { name: "Cat", age: 3 };
var myAnimal1 = myDog; // Valid because Dog has all properties of Animal
// let myDog1: Dog = myAnimal;  // Error
// In Easy way
myAnimal = myDog; // Valid
var add = function (x, y) { return x + y; };
var double = function (num) { return num * 2; };
//let processor: NumberProcessor = add; // Valid because Adder is structurally compatible with NumberProcessor
var mee = double;
console.log(mee(2, 3));
var myCar = { make: "Toyota", model: "Corolla", numberOfDoors: 4 };
var myVehicle = { make: "ABC", model: "XYZ" };
var myVehicle1 = myCar; // Valid because Car extends Vehicle
// let myCar1: ICar = myVehicle;  // Error
// In Easy Way 
myVehicle = myCar;
var parital = { x: 10 }; // can accept
var full = { x: 10, y: 20 };
parital = full; // Valid because IFullPoint has all properties of IPartialPoint
// full = parital; // Error: Property 'y' is missing in type IPartialPoint but required in type IFullPoint
//----------------------------------------------------------------------------------------------
// Example 7: Using Structural Typing with Classes
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    return Rectangle;
}());
var Square = /** @class */ (function () {
    function Square(size) {
        this.width = size;
        this.height = size;
    }
    return Square;
}());
var rectangle = new Rectangle(10, 20);
var square = new Square(10);
rectangle = square; // Valid because Square is structurally compatible with Rectangle
square = rectangle; // Valid
// Explanation: Rectangle and Square classes have the same structure (properties width and height).
// Even though they are different classes, their instances are structurally compatible and can be
// assigned to each other.
//----------------------------------------------------------------------------------------------

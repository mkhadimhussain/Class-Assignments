////////////////////////////////// Assignment 10 //////////////////////////////////

// This is the Assignment of Class 12.

// Question: Practice Structural Typing completely.

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

let ball = {        // Fresh Object
    diameter: 10,  
}

let sphere = {      // Fresh Object
    diameter: 20,
}

let tube = {       // Fresh Object
    diameter: 30,
    radius: 15,
}

sphere = ball;    // Stale Object
ball = sphere;    // Stale Object

console.log(ball);    // { diameter: 10 } 
console.log(sphere);  // { diameter: 10 } because ball is assigned to sphere

// Defining new property in sphere
sphere = {
    diameter: 40,
    // length: 45,   // Shows Error because it's structure have one property and we
    // are making a Fresh Object
}

// Assigning tube to sphere
sphere = tube;   // No Error while tube have two properties it's because of Stale Object
// In Stale Object TypeScript allows extra properties

// Assigning tube to ball
ball = tube;    // also no Error while tube have two properties it's because of Stale Object
// In Stale Object TypeScript allows extra properties
console.log(ball); // { diameter: 30, radius: 15 }

//-------------------------------------------------------------------------------------------

// Example 1: Basic Structural Typing
type IPoint = {x: number, y: number}
type ICoordinate = {x: number, y: number}

let p: IPoint = {x: 10, y: 20};  // Frest Object
let c: ICoordinate = p;          // Stale Object
// This is allowed because Point and Coordinate have the same structure.
console.log(c);  // { x: 10, y: 20 }
//-------------------------------------------------------------------------------------------

// Example 2: Function Parameter Compatibility
type IPerson = {name: string, age: number};
type IEmployee = {name: string, age: number, employeeId: number};

function greet(person: IPerson): void {
    console.log(`Hello, ${person.name}`);
}

let employee: IEmployee = {
    name: 'Tahir',
    age: 32,
    employeeId: 111,
}

greet(employee);  // Output: Hello, Tahir
// Valid because Employee has all properties of Person (plus extra)
//-------------------------------------------------------------------------------------------

// Example 3: Interface Comaptibility
interface Animal {
    name: string,
    age: number,
}

interface Dog {
    name: string,
    age: number,
    breed: string,
}

let myDog: Dog = {name: "Buddy", age: 5, breed: "Golden Retriever"};
let myAnimal: Animal = {name: "Cat", age: 3};

let myAnimal1: Animal = myDog; // Valid because Dog has all properties of Animal
// let myDog1: Dog = myAnimal;  // Error

// In Easy way
myAnimal = myDog;     // Valid
// myDog = myAnimal;  // Error

//-------------------------------------------------------------------------------------------

// Example 4: Extending Types
type IVehicle = {make: string, model: string};
type ICar = IVehicle & {numberOfDoors: number};

let myCar: ICar = {make: "Toyota", model: "Corolla", numberOfDoors: 4};
let myVehicle: IVehicle = {make: "ABC", model: "XYZ"};

let myVehicle1: IVehicle = myCar; // Valid because Car extends Vehicle
// let myCar1: ICar = myVehicle;  // Error

// In Easy Way 
myVehicle = myCar;
// myCar = myVehicle;  // Error

// myCar contains all the properties of IVehicle, it can be assigned to a IVehicle variable.
// myVehicle cannot contain the all properties of myCar that's why it cannot be assigned to it.
//----------------------------------------------------------------------------------------------

// Example 5: Optional Properties
type IPartialPooint = {x: number, y?: number};
type IFullPoint = {x: number, y: number};

let parital: IPartialPooint = {x: 10};  // can accept
let full: IFullPoint = {x: 10, y: 20};

parital = full; // Valid because IFullPoint has all properties of IPartialPoint
// full = parital; // Error: Property 'y' is missing in type IPartialPoint but required in type IFullPoint
//----------------------------------------------------------------------------------------------

// Example 6: Using Structural Typing with Classes
class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

class Square {
    width: number;
    height: number;
    constructor(size: number) {
        this.width = size;
        this.height = size;
    }
}

let rectangle: Rectangle = new Rectangle(10, 20);
let square: Square = new Square(10);

rectangle = square;  // Valid because Square is structurally compatible with Rectangle
square = rectangle;  // Valid

// Explanation: Rectangle and Square classes have the same structure (properties width and height).
// Even though they are different classes, their instances are structurally compatible and can be
// assigned to each other.
//----------------------------------------------------------------------------------------------

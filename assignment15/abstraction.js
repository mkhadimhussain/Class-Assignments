// Abstraction
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstraction involves hiding complex implementation details and exposing only the necessary
// parts to the user. In TypeScript, abstraction is often achieved using abstract classes and methods.
// Abtract class (parent class)
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    // Concrete method
    Animal.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeter, "m."));
    };
    return Animal;
}());
// Derived class (child class)
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(namee) {
        return _super.call(this, namee) || this; // Call to parent constructor
    }
    // implementing abstract method
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " barks."));
    };
    return Dog;
}(Animal));
// Create an instance of Dog
var dog = new Dog("Buddy");
// Call abstract and concrete method
dog.makeSound(); // Output: Buddy barks.
dog.move(10); // Output: Buddy moved 10m.
// The Animal class is abstract (abstract keyword), meaning it cannot be instantiated directly.
// It contains an abstract method makeSound() that must be implemented in any derived class
// (Dog in this case). The move() method is concrete and has a default implementation in the Animal
// class, but can be overridden in derived classes if needed.

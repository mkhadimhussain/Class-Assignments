// Polymorphism
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
// Polymorphism allows objects of different classes to be treated as objects of a common parent class.
// It involves method overriding, where a method in a child class has the same name and signature as a
// method in its parent class, but behaves differently.
// Base class (Parent class)
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    // Method
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " make a sound."));
    };
    return Animal;
}());
// Derived class (Child class)
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(namee) {
        return _super.call(this, namee) || this; // Call to parent constructor
    }
    // Overridden method
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " barks."));
    };
    return Dog;
}(Animal));
// Derived class (Child class)
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name1) {
        return _super.call(this, name1) || this; // Call to parent constructor
    }
    // overridden method
    Cat.prototype.makeSound = function () {
        console.log("".concat(this.name, " meows."));
    };
    return Cat;
}(Animal));
// Create instances of different animals
var dog = new Dog("Buddy");
var cat = new Cat("Whiskers");
// Polymorphic behavior
var animals = [dog, cat];
// Call makeSound() on each animal
animals.forEach(function (animal) { return animal.makeSound(); });
// Output:
// Buddy barks.
// Whiskers meows.
// In this example, both Dog and Cat classes inherit from the Animal class and override the
// makeSound() method to provide different behaviors (barks and meows, respectively). The
// animals array contains objects of different derived classes but is treated polymorphically,
// as they all inherit from Animal.

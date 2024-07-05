// Inheritance
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
// Inheritance allows one class (child or derived class) to inherit properties and methods from
// another class (parent or base class).
// Base Class (Parent Class)
var Animal = /** @class */ (function () {
    function Animal(namee, agee) {
        this.name = namee;
        this.age = agee;
    }
    // public mehtod
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " make a sound."));
    };
    return Animal;
}());
// Derived Class (Child Class)
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name1, age1, breed1) {
        var _this = _super.call(this, name1, age1) || this; // Call to parent constructor
        _this.breed = breed1;
        return _this;
    }
    // Overridden Method
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, ", the ").concat(this.breed, ", barks."));
    }; // if 'name' was private property, so we will never access the name here
    return Dog;
}(Animal));
// Create an instance of Dog
var dog = new Dog("Buddy", 3, "Golden Retriver");
// Accessing inherited method
dog.makeSound(); // Output: Buddy, the Golden Retriver, barks.
console.log(dog); // Output: Dog { name: 'Buddy', age: 3, breed: 'Golden Retriver' }
// The 'Dog' class inherits from the 'Animal' class using the 'extends' keyword. This allows 'Dog' to inherit
// the 'name' and 'age' properties and the 'makeSound()' method from 'Animal'. The 'super()' keyword is used in
// the 'Dog' constructor to call the parent constructor.

// Abstraction

// Abstraction involves hiding complex implementation details and exposing only the necessary
// parts to the user. In TypeScript, abstraction is often achieved using abstract classes and methods.

// Abtract class (parent class)
abstract class Animal {
    constructor(protected name: string) {}

    // Abstract method (must be implemented in derived classes)
    abstract makeSound(): void;

    // Concrete method
    move(distanceInMeter: number = 0): void {
        console.log(`${this.name} moved ${distanceInMeter}m.`);
    }
}

// Derived class (child class)
class Dog extends Animal {
    constructor(namee: string) {
        super(namee);  // Call to parent constructor
    }

    // implementing abstract method
    makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}

// Create an instance of Dog
let dog = new Dog("Buddy");

// Call abstract and concrete method
dog.makeSound();  // Output: Buddy barks.
dog.move(10);     // Output: Buddy moved 10m.

// The Animal class is abstract (abstract keyword), meaning it cannot be instantiated directly.
// It contains an abstract method makeSound() that must be implemented in any derived class
// (Dog in this case). The move() method is concrete and has a default implementation in the Animal
// class, but can be overridden in derived classes if needed.

// Polymorphism

// Polymorphism allows objects of different classes to be treated as objects of a common parent class.
// It involves method overriding, where a method in a child class has the same name and signature as a
// method in its parent class, but behaves differently.

// Base class (Parent class)
class Animal {
    constructor(protected name: string) {}

    // Method
    public makeSound(): void {
        console.log(`${this.name} make a sound.`);      
    }
}

// Derived class (Child class)
class Dog extends Animal {
    constructor(namee: string) {
        super(namee);  // Call to parent constructor
    }

    // Overridden method
    public makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}

// Derived class (Child class)
class Cat extends Animal {
    constructor(name1: string) {
        super(name1);  // Call to parent constructor
    }

    // overridden method
    public makeSound(): void {
        console.log(`${this.name} meows.`);
    }
}

// Create instances of different animals
let dog = new Dog("Buddy");
let cat = new Cat("Whiskers")

// Polymorphic behavior
let animals: Animal[] = [dog, cat];

// Call makeSound() on each animal
animals.forEach(animal => animal.makeSound());
// Output:
// Buddy barks.
// Whiskers meows.

// In this example, both Dog and Cat classes inherit from the Animal class and override the
// makeSound() method to provide different behaviors (barks and meows, respectively). The
// animals array contains objects of different derived classes but is treated polymorphically,
// as they all inherit from Animal.

// Inheritance

// Inheritance allows one class (child or derived class) to inherit properties and methods from
// another class (parent or base class).

// Base Class (Parent Class)
class Animal {
    protected name: string;
    protected age: number;

    constructor(namee: string, agee: number) {
        this.name = namee;
        this.age = agee;
    }

    // public mehtod
    public makeSound(): void {
        console.log(`${this.name} make a sound.`);       
    }
}

// Derived Class (Child Class)
class Dog extends Animal {
    private breed: string;

    constructor(name1: string, age1: number, breed1: string) {
        super(name1,age1);  // Call to parent constructor
        this.breed = breed1;
    }

    // Overridden Method
    public makeSound(): void {
        console.log(`${this.name}, the ${this.breed}, barks.`);       
    }   // if 'name' was private property, so we will never access the name here
}

// Create an instance of Dog
let dog = new Dog("Buddy", 3, "Golden Retriver")

// Accessing inherited method
dog.makeSound();  // Output: Buddy, the Golden Retriver, barks.

console.log(dog);  // Output: Dog { name: 'Buddy', age: 3, breed: 'Golden Retriver' }

// The 'Dog' class inherits from the 'Animal' class using the 'extends' keyword. This allows 'Dog' to inherit
// the 'name' and 'age' properties and the 'makeSound()' method from 'Animal'. The 'super()' keyword is used in
// the 'Dog' constructor to call the parent constructor.

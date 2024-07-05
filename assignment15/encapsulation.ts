// Encapsulation

// Encapsulation is the OOP principle that bundles the data (attributes) and the methods (functions)
// that operate on the data into a single unit called a class. It restricts direct access to some of
// the object's components, which means that the internal representation of an object is hidden from
// the outside. Access to the data is provided through public methods, ensuring that data is protected
// from unauthorized access and modification.

class Animal {
    // private properties
    private name: string;
    private age: number;

    // Constructor
    constructor(namee: string, agee: number) {
        this.name = namee;
        this.age = agee;
    }

    // public method
    public displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Create an instance of Animal
let animal = new Animal("Generic Animal", 5);

// Accessing public method (encapsulated data)
animal.displayInfo();  // Output: Name: Generic Animal, Age: 5

console.log(animal);     // Output: Animal { name: 'Generic Animal', age: 5 }

// Updating name which is private property
// animal.name = "DOG"    // Error becase we cannot access the private property outside the class

// Try accessing private properties directly (won't work)
// console.log(animal.name); // Compilation Error: Property 'name' is private and only accessible within
// class 'Animal'.

// In this example, name and age properties are encapsulated within the Animal class using the private
// access modifier. They can only be accessed or modified within the class itself. The displayInfo()
// method is public, allowing controlled access to encapsulated data.

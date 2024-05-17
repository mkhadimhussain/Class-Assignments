// Constructor Function:

// Definition: A constructor function is a function that is used to create and initialize objects.
// It's defined using the class or function keyword followed by the function name.
// Constructor functions in TypeScript are defined using the constructor keyword within a class. 

// Usage: You can use a constructor function to create multiple instances (objects) of 
// the same type with similar properties and methods.

// Initialization: Inside a constructor function, you can initialize object properties
// and perform any necessary setup logic.

// class Product {
//     constructor() {}
//   }

class fullName {
    firstName: string;
    middleName: string;
    lastName: string;

    constructor(firstName: string, middleName: string, lastName: string) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        // In this case, this.firstName = firstName; assigns the value of the firstName parameter 
        // passed to the constructor to the firstName property of an instance of the FullName class.
    }
}
const name1 = new fullName("M", "Khadim", "Hussain");
console.log(name1);
// Output: fullName { firstName: 'M', middleName: 'Khadim', lastName: 'Hussain' }

const name2 = new fullName("M", "Hassan", "Ali");
console.log(name2);
// Output: fullName { firstName: 'M', middleName: 'Hassan', lastName: 'Ali' }

//------------------------------------------------------------------------------------------------
console.log();

class car {
    brand: string;
    model: string;
    year: number

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Car: ${this.brand} ${this.model} ${this.year}`);
        
    }
}

const car1 = new car("Honda", "Civic", 2020);
const car2 = new car("Toyota", "Camry", 2022);
console.log(car1);   // Output: car { brand: 'Honda', model: 'Civic', year: 2020 }
console.log(car2);   // Output: car { brand: 'Toyota', model: 'Camry', year: 2022 }

car1.displayInfo();  // Output: Car: Honda Civic 2020
car2.displayInfo();  // Output: Car: Toyota Camry 2022

//------------------------------------------------------------------------------------------------
console.log();

class person {
    name: string;
    age: number;
    address: {
        city: string,
        country: string,
    };
    hobbies: string[]

    constructor(name: string, age: number, address: {city: string, country: string}, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.address = address
        this.hobbies = hobbies
    }
}

const person1 = new person("Saif", 22, {city: "Karachi", country: "Pakistan"}, ["Reading", "Coding"]);
const person2 = new person("Zain", 21, {city: "Multan", country: "Pakistan"}, ["Writing", "Gym"]);

console.log(person1);
// Output
// person {
//     name: 'Saif',
//     age: 22,
//     address: { city: 'Karachi', country: 'Pakistan' },
//     hobbies: [ 'Reading', 'Coding' ]
//   }

//------------------------------------------------------------------------------------------------
console.log();

class product {
    name: string;
    price: number;

    constructor(name = "Unknown", price = 0) {
        this.name = name;
        this.price = price;
    }

    displayInfo() {
        console.log(`Product: ${this.name} $${this.price}`);   
    }
}
const product1 = new product("Laptop",1200);
const product2 = new product();

console.log(product1);  // Output: product { name: 'Laptop', price: 1200 }
console.log(product2);  // Output: product { name: 'Unknown', price: 0 }

product1.displayInfo(); // Output: Product: Laptop $1200
product2.displayInfo(); // Output: Product: Unknown $0




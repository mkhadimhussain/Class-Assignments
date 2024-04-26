// Named Export:
// These are used to export multiple functions, classes, or variables from a module. 
// You export specific entities by using the export keyword before their declaration.

// Export Variable
export const calculator: string = "Calculator (Named Export Variable)";

// Export Functions

// Addition
export function addition(): string {
    const num1: number = 5;
    const num2: number = 4;
    const result: number = num1 + num2;
    return `The Addition of ${num1} and ${num2} is ${result}.`;
}

// Subtraction
export function subtraction(): string {
    const num1: number = 10;
    const num2: number = 5;
    const result: number = num1 - num2;
    return `The Subtraction of ${num1} and ${num2} is ${result}.`;
}

// Multiplication 
export function multiplication() {
    const num1: number = 4;
    const num2:number = 3;
    const result: number = num1 * num2;
    return `The Multiplication of ${num1} and ${num2} is ${result}.`
}

// Division
export function division() {
    const num1: number = 4;
    const num2:number = 3;
    const result: number = num1 / num2;
    return `The Division of ${num1} and ${num2} is ${result}.`
}

// Power
export function power(num1: number, num2:number): string {
    const result: number = num1 ** num2;
    return `The Power of ${num1} and ${num2} is ${result}.`
}

// Modulus
export function modulus(num1: number, num2: number): string {
    const result: number = num1 % num2;
    return `The Modulus of ${num1} and ${num2} is ${result}.`
}



// Default Export:
// This is used to export a single entity from a module. This is useful when 
// you want to export just one thing from a module.

export default function myName(): string {
    const name1: string = "Khadim";
    const name2: string = "Hussain  (Default Export Function)";
    return name1 + " " + name2;
}

// Trying to another default export

// export default function aboutDefault() {
    
// }     
// This shows error because default export allows to export single entity from a module.
// default export, export the module only one time in a same file.

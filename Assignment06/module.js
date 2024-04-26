// Named Export:
// These are used to export multiple functions, classes, or variables from a module. 
// You export specific entities by using the export keyword before their declaration.
// Export Variable
export const calculator = "Calculator (Named Export Variable)";
// Export Functions
// Addition
export function addition() {
    const num1 = 5;
    const num2 = 4;
    const result = num1 + num2;
    return `The Addition of ${num1} and ${num2} is ${result}.`;
}
// Subtraction
export function subtraction() {
    const num1 = 10;
    const num2 = 5;
    const result = num1 - num2;
    return `The Subtraction of ${num1} and ${num2} is ${result}.`;
}
// Multiplication 
export function multiplication() {
    const num1 = 4;
    const num2 = 3;
    const result = num1 * num2;
    return `The Multiplication of ${num1} and ${num2} is ${result}.`;
}
// Division
export function division() {
    const num1 = 4;
    const num2 = 3;
    const result = num1 / num2;
    return `The Division of ${num1} and ${num2} is ${result}.`;
}
// Power
export function power(num1, num2) {
    const result = num1 ** num2;
    return `The Power of ${num1} and ${num2} is ${result}.`;
}
// Modulus
export function modulus(num1, num2) {
    const result = num1 % num2;
    return `The Modulus of ${num1} and ${num2} is ${result}.`;
}
// Default Export:
// This is used to export a single entity from a module. This is useful when 
// you want to export just one thing from a module.
export default function myName() {
    const name1 = "Khadim";
    const name2 = "Hussain  (Default Export Function)";
    return name1 + " " + name2;
}
// Trying to another default export
// export default function aboutDefault() {
// }     
// This shows error because default export allows to export single entity from a module.
// default export, export the module only one time in a same file.

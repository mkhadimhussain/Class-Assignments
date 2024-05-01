
export const vegetables: string[] = ["Potato", "Tomato", "Onion", "Mint"];

// Accessing Element by thier Index
export const accessByIndex: string = vegetables[2];

// push() => Adds one or more elements to the end of the array.
export function pushMethod() {
    vegetables.push("Carrot");
    return vegetables;
}

// pop() => Removes the last element from the array.
export function popMethod() {
    vegetables.pop();
    return vegetables;
}

// unshift() => Adds one or more elements to the beginning of the array.
export function unshiftMethod() {
    vegetables.unshift("Chilli");
    return vegetables;
}

// shift() => Removes the first element from the array.
export function shiftMethod() {
    vegetables.shift();
    return vegetables;
}

// splice() => Add or remove elements from the array.
export function spliceMethod() {
    // splice(start: number, deleteCount: number, ...items: string[])
    vegetables.splice(3,1,"Garlic");
    return vegetables;
}

// slice() => Extracts a section of an array and returns a new array.
export function sliceMehtod() {
    const slicedArray: string[] = vegetables.slice(1,3);
    return slicedArray;
}

// concat() => Combines two or more arrays and returns a new array.
export function concatMethod() {
    const vegetables1: string[] = ["Red Chilli", "Pumpkin"];
    const allVegetables: string[] = vegetables.concat(vegetables1);
    return allVegetables;
}










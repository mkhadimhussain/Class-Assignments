/////////////// Arrays Methods In Modules ///////////////

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

// filter() => Creates a new array with elements that pass a test.
export function filterMethod() {
    const filterOnion: string[] = vegetables.filter(vegetable => vegetable === "Onion");
    // Filter all elements which are equal to "Onion"
    return filterOnion;
}

// map() => Creates a new array by applying a provided function on every element in the array.
export function mapMethod() {
    const adding1ToVeg: string[] = vegetables.map(vegetable => vegetable + 1);
    return adding1ToVeg;
}

// every() => Checks if all elements in the array satisfy a condition, if yes then return true else false.
export function everyMethod() {
    const checkAllVegAreTomato: boolean = vegetables.every(vegetable => vegetable === "Tomato");
    // Check every elements of the vegetables array are equal to "Tomato"?
    return checkAllVegAreTomato;
}

// some() => Checks if at least one element in the array satisfies a condition, if yes then return true else false.
export function someMethod() {
    const checkOneVegAreTomato: boolean = vegetables.some(vegetable => vegetable === "Tomato");
    // check 'Tomato' are in a Vegetables?
    return checkOneVegAreTomato;
};

// forEach() => Executes a provided function once for each array element.
// OR           Calls a function for each element in the array.
export function forEachMethod() {
    vegetables.forEach(vegetable => console.log(`I Like ${vegetable}`));
    return;
};

// indexOf() => Returns the index of the first occurrence of a value in the array, or -1 if none is found.
export function indexOfMethod() {
    const index: number = vegetables.indexOf("Garlic");
    return index;
}

//lastIndexOf() => Returns the index of the last occurrence of a value in the array, or -1 if none is found.
export function lastIndexOfMethod() {
    const doublePotato: string[] = ["Potato", "Onion", "Potato"];
    const lastIndex: number = doublePotato.lastIndexOf("Potato");
    return lastIndex;
}

// join() => Joins all elements of an array into a string.
export function joinMethod() {
    const joinedVegetables: string = vegetables.join(", ");
    return joinedVegetables;
}

// toString() => Converts the array to a string representation.
export function toStringMethod() {
    const stringRepresentation: string = vegetables.toString();
    return stringRepresentation;
}

// reduce() => Reduces the array to a single value using a function.(from left to right)
export function reduceMethod() {
    const reducedSum: string = vegetables.reduce((accumulator, currentValue) => accumulator + currentValue, '');
    // accumulator = which accumulates the result
    // currentValue = the current element being processed in the array
    // '' = initial value of the accumulator (empty)
    return reducedSum;
}

// reduceRight() => Similar to reduce(), but processes the array from right to left.
export function reduceRightMethod() {
    const reversedSum: string = vegetables.reduceRight((acc, curr) => acc + curr, '');
    return reversedSum;
}

// reverse() => Reverses the order of elements in the array.
export function reverseMethod() {
    return vegetables.reverse();
}

// sort() => Sorts the elements of the array. (here in Ascending order)
export function sortMethod() {
    return vegetables.sort();
}











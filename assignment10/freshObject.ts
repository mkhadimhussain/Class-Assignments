// Fresh Objects (Direct Assignment)
// Fresh objects refer to object literals that TypeScript type-checks rigorously to ensure
// they match the required type precisely, without any extra properties. When you assign an
// object literal directly to a type, TypeScript performs an exact check to make sure all
// properties match the expected type, with no extras.

// Fresh Objects: Directly assigned object literals, rigorously checked for exact type conformance.

interface Person {
    name: string;
    age: number;
}

// Direct assignment with an Object literal (Frest Object)
let person1: Person = {
    name: 'Jameel',
    age: 23,
}; // Valid

// Extra property in Object literal (Fresh Object)
let person2: Person = {
    name: 'Asif',
    age: 25,
    // address: '123 Street',  // Error: Object literal may only specify known properties
}; // Invalid

// In the above example, person2 is a fresh object, and TypeScript detects the extra
// address property, which causes an error.


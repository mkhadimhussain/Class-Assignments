// Fresh Objects (Direct Assignment)
// Fresh objects refer to object literals that TypeScript type-checks rigorously to ensure
// they match the required type precisely, without any extra properties. When you assign an
// object literal directly to a type, TypeScript performs an exact check to make sure all
// properties match the expected type, with no extras.
// Direct assignment with an Object literal (Frest Object)
var person1 = {
    name: 'Jameel',
    age: 23,
}; // Valid
// Extra property in Object literal (Fresh Object)
var person2 = {
    name: 'Asif',
    age: 25,
    // address: '123 Street',  // Error: Object literal may only specify known properties
}; // Invalid
// In the above example, person2 is a fresh object, and TypeScript detects the extra
// address property, which causes an error.

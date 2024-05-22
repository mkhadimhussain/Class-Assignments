// Stale Objects (Variable Assignment)
// Stale objects, on the other hand, are objects assigned to variables before being assigned
// to a specific type. When an object is assigned to a variable, TypeScript allows extra
// properties, as long as the required properties are present. This is less strict than the
// check performed for fresh objects.

// Stale Objects: Objects assigned to variables before being assigned to a type, allowing extra
// properties as long as required ones are present.

interface Employee {
    name: string;
    id: number;
}

let employee1 = {
    name: 'Nadeem',
    id: 55,
    address: '123 Street'
}
// Assigning to a variable first (Stale Object)
let employee2: Employee = employee1;  // Valid
console.log(employee2); // { name: 'Nadeem', id: 55, address: '123 Street' }

// In this case, employee1 is assigned to employee2. Since employee1 is not an object literal
// but a variable, TypeScript allows the assignment, ignoring the extra address property.


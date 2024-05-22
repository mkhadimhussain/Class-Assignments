// Aliases: 
// In TypeScript, an alias is simply another name for an existing type.
// Type aliases are used to create new names for types, making code more
// readable and easier to manage.

// Type Aliases:
// You can define a type alias using the type keyword. This is particularly
// useful for complex types or for simplifying type names.

type IStudentInfo = {
    name: string,
    age: number,
    cnicNo: number,
}

// We can use IStudentInfo multiple times for student1,2,3.

let student1: IStudentInfo = {
    name: "Khadim",
    age: 23,
    cnicNo: 123456789,
}

let student2: IStudentInfo = {
    name: "Mujtaba",
    age: 40,
    cnicNo: 987654321,
}

let student3: IStudentInfo = {
    name: "Sana",
    age: 24,
    cnicNo: 246813579,
}

console.log(student1); // { name: 'Khadim', age: 23, cnicNo: 123456789 }
console.log(student2); // { name: 'Mujtaba', age: 40, cnicNo: 987654321 }
console.log(student3); // { name: 'Sana', age: 24, cnicNo: 246813579 }
//-------------------------------------------------------------------------
console.log();

// For Union Literal
// Union types allow a value to be one of several types. Union literals are a
// specific case where the possible values are literal values.
type IRollNo = string | number;

let rollNo: IRollNo = 'GIAIC';
rollNo = 1234;
//--------------------------------------------------------------------------

// For Intersaction
// Intersection types combine multiple types into one. A value of an intersection
// type must satisfy all constituent types.
type person = {name: string};
type employee = {employeeId: number};
type IEmployeePerson = person & employee

let employee1: IEmployeePerson = {name: "Saif", employeeId: 5678};
//--------------------------------------------------------------------------

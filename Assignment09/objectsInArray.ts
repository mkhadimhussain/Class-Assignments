////////////////////// CLASS ASSIGNMENT 09 //////////////////////

//This is the Assignment of Class 11

//Question: Create a program in which object in array and practice constructor function.

// Objects in Array

interface info  {
    id: number;
    name: string;
    age: number;
    isMarried: boolean;
    hobbies: string[];
} 
// An interface in TypeScript is a way to define a contract for the structure of an object.
// It specifies the properties that an object must have, along with their types. Interfaces 
// are used to enforce a specific shape or structure on objects in TypeScript

const studentsInfo: info[] = [
    {id: 1, name: "Saif", age: 23, isMarried: false, hobbies: ["Coding", "Reading"]},
    {id: 2, name: "Anas", age: 21, isMarried: false, hobbies: ["Traveling", "Writing"]},
    {id: 3, name: "Moiz", age: 25, isMarried: true, hobbies: ["Gym", "Running"]},
    {id: 4, name: "Sana", age: 20, isMarried: false, hobbies: ["Makeup", "Shopping"]},
    {id: 5, name: "Fiza", age: 24, isMarried: true, hobbies: ["Cooking", "Shopping"]},
    {id: 6, name: "Ali", age: 24, isMarried: true, hobbies: ["Traveling", "Reading"]}
];

console.log(studentsInfo[3]);
// Output
// {
//   id: 4,
//   name: 'Sana',
//   age: 20,
//   isMarried: false,
//   hobbies: [ 'Makeup', 'Shopping' ]
// }

//--------------------------------------------------------------------------
console.log();

const students = [
    {name: "Mudassir", id: 101, age: 24, address: "AB 12 Karachi"},
    {name: "Hassan", id: 102, age: 22, address: "123 Karachi" },
    {name: "Bilal", id: 103, age: 23, address: "ABC Karachi"},
    {name: "Saif", id: 104, age: 21, address: "456 Karachi"},
    {name: "Ali", id: 105, age: 24, address: "XYZ Karachi"}
];

console.log(students[2]);
// Output: { name: 'Bilal', id: 103, age: 23, address: 'ABC Karachi' }

//--------------------------------------------------------------------------
console.log();

interface details {
    name: string,
    age: number,
    isMarried: boolean,
    hobbies: string[],
    address: {
        house: string | number,
        city: string,
        country: string
    }
}

const employeeDetails: details[] = [
    // 1st Object at index 0
    {
    name: "Yasir", 
    age: 23, 
    isMarried: false, 
    hobbies: ["Reading", "Writing"], 
    address: {
        house: 12, 
        city: "Karachi", 
        country: "Pakistan"
        }
    },
    // 2nd Object at index 1
    {
        name: "Hamid",
        age: 25,
        isMarried: true,
        hobbies: ["Gym", "Coding"],
        address: {
            house: "ABC",
            city: "Karachi",
            country: "Pakistan"
        }
    },
]

console.log(employeeDetails[0]);
// Output
// {
//   name: 'Yasir',
//   age: 23,
//   isMarried: false,
//   hobbies: [ 'Reading', 'Writing' ],
//   address: { house: 12, city: 'Karachi', country: 'Pakistan' }
// }



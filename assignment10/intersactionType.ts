// Intersection Types:
// Intersection types combine multiple types into one. A value of an intersection
// type must satisfy all constituent types.
type IStudent = {
    name: string,
    rollNo: number,
}

type ITeacher = {
    name: string,
    experience: number,
}

let person1: IStudent & ITeacher = {
    name: "Okasha",
    rollNo: 1234,
    experience: 3,
}
console.log(person1); // { name: 'Okasha', rollNo: 1234, experience: 3 }
//--------------------------------------------------------------------------------
console.log();

// For More Clearity create another type aliase
type IIntersectedType = IStudent & ITeacher
// now we will just use IIntersectedType 

let person2: IIntersectedType = {
    name: "Asharib",
    rollNo: 4321,
    experience: 3,
}
console.log(person2); // { name: 'Asharib', rollNo: 4321, experience: 3 }

// For Union Literal
// Union types allow a value to be one of several types. Union literals are a
// specific case where the possible values are literal values.

let rollNo: string | number = 'Giaic';
rollNo = 1212;

// Now we are defining the type alias for rollNo and we can use it multiple times
type IRollNo = string | number;

// using type alias in rollNo1
let rollNo1: IRollNo = 'GIAIC';
rollNo1 = 1234;

// using type alias in rollNo2
let rollNo2: IRollNo = 'PIAIC';
rollNo2 = 4321;


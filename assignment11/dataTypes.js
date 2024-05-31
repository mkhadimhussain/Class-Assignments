// Data Types  (any, unknown, never)
// any
// The any type allows a variable to hold any type of value, effectively opting out of type checking.
var val;
val = 5;
val = "TypeScript";
val = true;
val = undefined;
val = null;
// You can assign any value to val, and TypeScript won't check the type.
//-----------------------------------------------------------------------------------------------------
// unknown
// The unknown type represents a value that could be any type, but unlike any, it requires type checking
// before being used.
// unknown helps in Typecasting
var value;
value = 23;
value = "Hello";
if (typeof value === "string") {
    console.log(value.toLocaleUpperCase()); // 
}
var val2;
val2 = 5;
val2 = "TypeScript";
val2 = true;
val2 = undefined;
val2 = null;
// You must perform type checking to use the value, making it safer than any.
//-----------------------------------------------------------------------------------------------------
// Difference Between "any" and "unknown"
// any
// Assigning the "val" (with data type "any") to the new variable "val3".
var val3 = val; // No Error
// This is the reason that "any" is not preferable because if in starting we don't know the
// data type of any variable (in this case "val") and after some time we know the data type of 
// that variable then because of "any" we are not able to know, because if we are assigning it 
// to another variable with defined data types it did'nt shows error, but unknown shows error.
// unknown
// Assigning the "val2" (with data type "unknown") to the new variable "val4".
// let val4: string = val2;   // Error: Type 'unknown' is not assignable to type 'string'.
// Unknown helps in Typecasting, This error shows that if you know the data type of "val4" which is 
// "string" defined above, then how you can assign the unknown to the "val4" variable whose data type
// is known. This is the advantage of unknown as compared to any.
// unknown is preferable.
// any is not preferable.
//-----------------------------------------------------------------------------------------------------
// never
// The never type represents values that never occur. It is used for functions that never return or 
// always throw an error.
// Functions returning never are used in situations where the function cannot reach its end.
function abc() {
    while (true) { // This loop will never end becasue we did'nt defined the condition,
        // so it will running infinite times, it is a infinite loop.
    }
    return 0; // Not return anything becasue this 'return' is unreachable.
}
// If we use data type 'never' in function then the there should be return nothing.
function abcd() {
    while (true) { // infinite loop
    }
} // return nothing infinite loop
// let xyz: abc = 7;   // Error: Type 'number' is not assignable to type 'never'.
// let xyzz: abc = "Hello";  // Error: Type 'string' is not assignable to type 'never'.
// We can assign only one primitive data type at one time so how we can assign the "string" and
// "number" both at one time.
//-----------------------------------------------------------------------------------------------------

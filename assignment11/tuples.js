// Tuples
// Tuples are a special type of array where the types of elements are known and fixed.
// Tuples have fixed length but we push any data in it with .puch() method it accepts, this is the 
// problem in it.
var myInfo;
myInfo = ["Khadim", 23, true]; // It will not accept any additional data except these 3
console.log(myInfo); // Output: [ 'Khadim', 23, true ]
console.log(myInfo[0]); // Output: Khadim
console.log(myInfo["1"]); // Output: 23
var namee = myInfo[0];
console.log(namee); // Output: Khadim
var age = myInfo[1];
console.log(age); // Output: 23
var isActive = myInfo[2];
console.log(isActive); // Output: true
//------------------------------------------------------------------------------------------
var tuple;
tuple = ["Saif", 50, "Atif", 68, "Jamal", 78,];
console.log(tuple); // Output: [ 'Saif', 50, 'Atif', 68, 'Jamla', 78 ]
console.log(tuple[3]); // Output: 68
console.log(tuple[4]); // Output: Jamal
//------------------------------------------------------------------------------------------
// Tuples have fixed length but we push any data in it with .puch() method it accepts, this is the 
// problem in it.
var myData;
myData = ["Khadim", 58, false];
console.log(myData); // Output: [ 'Khadim', 58, false ]
myData.push(34); // No Error (it accept the extra data)
console.log(myData); // Output: [ 'Khadim', 58, false, 34 ]
myData.push("Hello");
console.log(myData); // Output: [ 'Khadim', 58, false, 34, 'Hello' ]
//------------------------------------------------------------------------------------------

// Break Statement
// "break" statement is used within loops to prematurely exit the loop when a certain condition is met.
// The break statement is used to immediately exit a loop.

// Using break in a for loop
// Exit when find 5

for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    break;  // Exit the loop when i is equal to 5
  }
}
// Output
// 0
// 1
// 2
// 3
// 4
// 5
//--------------------------------------------------------------------------
console.log();

// Using break in a while loop
// Exit when find 3

let j = 0;
while (j <= 10) {
  console.log(j);
  if (j === 3) {
    break;  // Exit the loop when j is equal to 3
  } 
  j++;
}
// Output
// 0
// 1
// 2
// 3
//--------------------------------------------------------------------------
console.log();

// Exit when find 5
let k = 0;
while (true) {
  console.log(k);
  if (k === 5) {
    break;  // Exit loop when k is 5
  }
  k++;
}
// Output
// 0
// 1
// 2
// 3
// 4
// 5
//--------------------------------------------------------------------------
console.log();

// Searching for a Value
const cities: string[] = ["Lahore", "Multan", "Karachi", "Peshawar"];
let found = false;    // not found thats why false

for (let city of cities) {
  if (city === "Karachi") {
    found = true;   // found true
    console.log(city);
    break;  // Exit loop if "Karachi" is found
  }
}
console.log(found ? "Found" : "Not Found");   // Output the search result
//      condition ? value_if_true : value_if_false.  (This is a ternary expression)
// If found is true, then "Found" is the value returned by the ternary operator.
// If found is false, then "Not Found" is the value returned by the ternary operator.

// If "Karachi" is not found, it will log "Not Found" because found remains false.
// Output
// Karachi
// Found
//--------------------------------------------------------------------------



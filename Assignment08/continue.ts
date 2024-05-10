// Continue Statement:

// When encountered inside a loop, it skips the remaining code in the current iteration
// and proceeds to the next iteration of the loop.
// It's typically used to skip certain iterations based on a condition without 
// terminating the loop entirely.

// Continue in for loop
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Skip iteration when i is 2
    }
    console.log(i);  // This is will not be executed when i = 2
    
}
// Output
// 0
// 1
// 3
// 4
//--------------------------------------------------------------------------
console.log();

// Skipping the Odd Numbers
for (let a = 1; a <= 10; a++) {
    if (a % 2 !== 0) {
        continue;
    }
    console.log(a);  //  This will print only even numbers
    
}
// Output
// 2
// 4
// 6
// 8
// 10

//--------------------------------------------------------------------------
console.log();

const nums: number[] = [1, 2, 3, 4, 5, 6];
for (let num of nums) {
  if (num === 3 || num === 5) {
    continue;    // Skip 3 and 5
  }
  console.log(num);  // Print other numbers
  
}
// Here, the loop skips numbers 3 and 5 using continue, printing only the 
// numbers that are not equal to 3 or 5.
// Output
// 1
// 2
// 4
// 6
//--------------------------------------------------------------------------


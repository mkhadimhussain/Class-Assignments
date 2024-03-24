////////////////////// ASSIGNMENT 03 //////////////////////

//This is the Assignment of Class 05

//Question: Make a program using Logical Operators (AND "&&", OR "||", NOT "!") and 
//          Conditional Statements (if, else if, else).

//LOGICAL OPERATORS (AND "&&", OR "||", NOT "!")
//AND "&&" operator
//&& returns true only when both conditions are true
let numb1 : number = 6
let numb2 : number = 5

//both conditions are true
console.log(numb1 == 6 && numb2 == 5)     //true

//both conditions are false
console.log(numb1 == 5 && numb2 == 6)     //false

//1st condition is true and another condition is false so  output will false
console.log(numb1 == 6 && numb2 == 7)     //false

//1st condition is false and 2nd condition is true so output will false
console.log(numb1 == 3 && numb2 == 5)     //false 

//OR "||" operator
//|| returns true if at least one condition is true
//both conditions are true
console.log(numb1 == 6 || numb2 == 5)      //true
console.log(numb1 == 6 || numb2 == numb2)  //true
console.log(numb1 == 6 || numb1 == numb1)  //true
console.log(numb2 == 5 || numb2 == numb2)  //true

//both conditions are false
console.log(numb1 == 4 || numb2 == 2)      //false
console.log(numb1 == numb2 || numb2 == numb1)   //false
console.log(numb1 == 9 || numb2 == numb1)      //false

//1st condition is true another is false so output will true
console.log(numb1 == 6 || numb2 == 8)      //true
console.log(numb1 == numb1 || numb2 == 2)      //true
console.log(numb1 == numb1 || numb2 == numb1)   //true

//1st condition is false another is true so output will true
console.log(numb1 == 3 || numb2 == 5)    //true
console.log(numb1 == numb2 || numb2 == numb2)   //true
console.log(numb1 == 9 || numb2 == numb2)    //true

//NOT "!" operator
//"!" reverse the boolean value of a condition
console.log(!(numb1 == numb2))    //true
// (Not(false)) = true
console.log(!(numb1 == 8))     //true

console.log(!(numb1 == numb1))    //false
//   (Not(true)) = false
console.log(!(numb2 == 5))      //false

//////////////////////////////////////////////////////////
//CONDITIONAL STATEMENTS (if, else if, else)

let personAge : number = 15
if (personAge < 18) {
    console.log("You are not elegible for CNIC")       // output 
}
else if (personAge == 18) {
    console.log("You are eligible for CNIC")
}
else if (personAge == 19) {
    console.log("you are eligible but you waste 1 year")
}
else if (personAge == 20) {
    console.log("you are eligible but you waste 2 years")
}
else if (personAge == 21) {
    console.log("you are eligible but you waste 3 years")
}
else {
    console.log("you are late")               
}



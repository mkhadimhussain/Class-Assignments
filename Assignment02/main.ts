////////////////////// CLASS ASSIGNMENT 02 //////////////////////

//This is the Assignment of Class 04

//Question: Make a program program using Camparison Operators but store values in variables.

//COMPARISON OPERATORS IN VARIABLES
//Comparison operators output's in boolean true/fale 
const a : number = 20
const b : number = 10

//IS EQUAL  ==
console.log(a == b)        //false      
//(15 == 19)      //error bcz of typescript intelligence but will run and show "false"
//(5 == 5)        //ture
//(5 == "5")      //true   gives error but shows true bcz compiler see 5 in "" 
//(5 == "5abc")   //false  bcz here 5 is not alone they have some string in it in their ""

//NOT EQUAL !=
console.log(a != b)        //true    
//(10 != 10)               //false bcz they both are equal   
//console.log(10 != 20)    //error bcz of typescript intelligence but will run and show "true"
//console.log(5 != 29)     //true bcz they both are not equal

//GREATOER THEN >
console.log(a > b)         //true       
//(10 > 5)                 // true
//(8 > 22)                 // false

//LESS THEN <
console.log(a < b)         //false      
//(10 < 5)                 //false
//(7 <  12)                //true

//GREATOR THEN OR EQUAL TO  >=
console.log(a >= b)        //true       
//(5 >= 2)          //5 is greator then or equal to 2  "true"
//(8 >= 10)         //8 is greator then or equal to 10 "false"

//LESS THEN OR EQUAL TO  <=
console.log(a <= b)        //false      
//(5 <= 2)          //5 is less then or equal to 2  "false" 
//(9 <= 20)         //9 is less then or equal to 20 "true" 

//TYPE CHECK ===  
//True when same value and same type
//NUMBER === NUMBER     true
//NUMBER === STRING     false
console.log(a === b)       //false     
//(5 === 5)            //true                            
//(5 === 6)            //false      show error
//(5 === "5")          //false      show error
//(5 === "5bhj")       //false      show error
//(6 === "abc")        //false      show error
//("abc" === "xyz")    //false      show error
//console.log("abc" === "abc")      //true                
 
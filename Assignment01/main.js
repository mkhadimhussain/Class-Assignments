////////////////////// ASSIGNMENT 01 //////////////////////
//This is the Assignment of Class 03
//Question: Print your Bio data and then update it and make some constant variables.
var first_name = "M.khadimm Hussain";
var last_name = "Shah";
console.log("Full Name : ", first_name, last_name);
//updating first_name and last_name variables
first_name = "KHADIM";
last_name = "HUSSAIN";
console.log(first_name, last_name); //it update the name in KHADIM HUSSAIN
var age = 23;
console.log("Age : ", age);
//updating age variable
age = 22;
console.log(age); // it update the age in 22
var is_married = false;
console.log("Is Married : ", is_married);
//updating is_married variable
is_married = true;
console.log(is_married); //it update the is_married in true
//is_married = "yes"       //gives error bcz we decalred boolean above
//is_married = 344         //gives error bcz we decalred boolean above
//Defining the constant variable (which is unchangable)
var religion = "Islam";
console.log("Religion : ", religion);
//Trying to update the constant variable
//religion = "other"     //gives error bcz its constant
var birthDate = 24;
console.log("Bithday Date : ".concat(birthDate));
//Trying to update the constant variable
//birthDate = 8         //gives error bcz its constant

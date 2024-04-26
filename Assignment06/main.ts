////////////////////// Class 08 HomeWork //////////////////////

// Class 08 HomeWork = Practice import and export Modules, also import modules from another folder.

// importing the named export (varible)
import { calculator } from "./module.js";
// named export (variable)
console.log(calculator);


// importing the named export (functions)
import { addition, subtraction, multiplication, division, power, modulus } from "./module.js";
// named export (functions)
console.log(addition());
console.log(subtraction());
console.log(multiplication());
console.log(division());
console.log(power(2,3));
console.log(modulus(5,3));


// impoting the default export
import myName from "./module.js";
// default export
console.log(myName());


// importing the percentage module from the PercentageModule Folder


// importing named export (Variable) from PercentageModule Folder
import { percentage } from "./PercentageModule/percentage.js";
// Named export variable from PercentageModule Folder
console.log(percentage);


// importing named export (funnction) from PercentageModule Folder
import { percentage1 } from "./PercentageModule/percentage.js";
// Named export function from PercentageModule Folder
console.log(percentage1());


//importing default export module from PercentageModule Folder
import percentage2 from "./PercentageModule/percentage.js";
// default export from PercentageModule Folder
console.log(percentage2());

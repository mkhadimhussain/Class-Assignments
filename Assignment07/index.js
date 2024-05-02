"use strict";
/////////////// Arrays Methods In Modules ///////////////
Object.defineProperty(exports, "__esModule", { value: true });
var veg_1 = require("./veg");
console.log(veg_1.vegetables); // output: [ 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log(veg_1.accessByIndex); // output: Onion
var veg_2 = require("./veg"); // for add or remove elements
var veg_3 = require("./veg"); // create new arrays
var veg_4 = require("./veg"); // output in boolean
var veg_5 = require("./veg"); // output in string
var veg_6 = require("./veg"); // output in number
var veg_7 = require("./veg"); //  output in string 
var veg_8 = require("./veg"); // for orders
console.log((0, veg_2.pushMethod)()); // output: [ 'Potato', 'Tomato', 'Onion', 'Mint', 'Carrot' ]
console.log((0, veg_2.popMethod)()); // output: [ 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log((0, veg_2.unshiftMethod)()); // output: [ 'Chilli', 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log((0, veg_2.shiftMethod)()); // output: [ 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log((0, veg_2.spliceMethod)()); // output: [ 'Potato', 'Tomato', 'Onion', 'Garlic' ]
console.log((0, veg_3.sliceMehtod)()); // output: [ 'Tomato', 'Onion' ]
console.log((0, veg_3.concatMethod)()); // output: [ 'Potato', 'Tomato', 'Onion', 'Garlic', 'Red Chilli', 'Pumpkin' ]
console.log((0, veg_3.filterMethod)()); // output: [ 'Onion' ]
console.log((0, veg_3.mapMethod)()); // output: [ 'Potato1', 'Tomato1', 'Onion1', 'Garlic1' ]
console.log((0, veg_4.everyMethod)()); // output: false
console.log((0, veg_4.someMethod)()); // output: true
// this function retuens undefined that why not console it, Since forEachMethod() doesn't explicitly 
// return anything, JavaScript implicitly returns undefined,
(0, veg_5.forEachMethod)(); // output: I Like Potato
//         I Like Tomato
//         I Like Onion
//         I Like Garlic
console.log((0, veg_6.indexOfMethod)()); // output: 3 
console.log((0, veg_6.lastIndexOfMethod)()); // output: 2
console.log((0, veg_7.joinMethod)()); // output: Potato, Tomato, Onion, Garlic
console.log((0, veg_7.toStringMethod)()); // output: Potato,Tomato,Onion,Garlic
console.log((0, veg_7.reduceMethod)()); // output: PotatoTomatoOnionGarlic
console.log((0, veg_7.reduceRightMethod)()); // output: GarlicOnionTomatoPotato
console.log((0, veg_8.reverseMethod)()); // output: [ 'Garlic', 'Onion', 'Tomato', 'Potato' ]
console.log((0, veg_8.sortMethod)()); // output: [ 'Garlic', 'Onion', 'Potato', 'Tomato' ]

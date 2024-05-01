"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var veg_1 = require("./veg");
console.log(veg_1.vegetables); // output: [ 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log(veg_1.accessByIndex); // output: 
var veg_2 = require("./veg");
var veg_3 = require("./veg");
console.log((0, veg_2.pushMethod)()); // output: [ 'Potato', 'Tomato', 'Onion', 'Mint', 'Carrot' ]
console.log((0, veg_2.popMethod)()); // output: [ 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log((0, veg_2.unshiftMethod)()); // output: [ 'Chilli', 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log((0, veg_2.shiftMethod)()); // output: [ 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log((0, veg_3.spliceMethod)()); // output: [ 'Potato', 'Tomato', 'Onion', 'Garlic' ]
console.log((0, veg_3.sliceMehtod)()); // output: [ 'Tomato', 'Onion' ]
console.log((0, veg_3.concatMethod)()); // output: [ 'Potato', 'Tomato', 'Onion', 'Garlic', 'Red Chilli', 'Pumpkin' ]

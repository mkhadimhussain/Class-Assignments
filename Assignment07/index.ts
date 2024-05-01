import { vegetables, accessByIndex } from "./veg";
console.log(vegetables);    // output: [ 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log(accessByIndex); // output: Onion


import { pushMethod, popMethod, unshiftMethod, shiftMethod } from "./veg";
import { spliceMethod, sliceMehtod, concatMethod } from "./veg";

console.log(pushMethod());    // output: [ 'Potato', 'Tomato', 'Onion', 'Mint', 'Carrot' ]
console.log(popMethod());     // output: [ 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log(unshiftMethod()); // output: [ 'Chilli', 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log(shiftMethod());   // output: [ 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log(spliceMethod());  // output: [ 'Potato', 'Tomato', 'Onion', 'Garlic' ]
console.log(sliceMehtod());   // output: [ 'Tomato', 'Onion' ]
console.log(concatMethod());  // output: [ 'Potato', 'Tomato', 'Onion', 'Garlic', 'Red Chilli', 'Pumpkin' ]




















/////////////// Arrays Methods In Modules ///////////////

import { vegetables, accessByIndex } from "./veg";
console.log(vegetables);    // output: [ 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log(accessByIndex); // output: Onion


import { pushMethod, popMethod, unshiftMethod, shiftMethod, spliceMethod } from "./veg"; // for add or remove elements
import { sliceMehtod, concatMethod, filterMethod, mapMethod } from "./veg";  // create new arrays
import { everyMethod, someMethod } from "./veg";   // output in boolean
import { forEachMethod } from "./veg";  // output in string
import { indexOfMethod, lastIndexOfMethod } from "./veg";  // output in number
import { joinMethod, toStringMethod, reduceMethod, reduceRightMethod } from "./veg"; //  output in string 
import { reverseMethod, sortMethod } from "./veg";  // for orders

console.log(pushMethod());        // output: [ 'Potato', 'Tomato', 'Onion', 'Mint', 'Carrot' ]
console.log(popMethod());         // output: [ 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log(unshiftMethod());     // output: [ 'Chilli', 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log(shiftMethod());       // output: [ 'Potato', 'Tomato', 'Onion', 'Mint' ]
console.log(spliceMethod());      // output: [ 'Potato', 'Tomato', 'Onion', 'Garlic' ]
console.log(sliceMehtod());       // output: [ 'Tomato', 'Onion' ]
console.log(concatMethod());      // output: [ 'Potato', 'Tomato', 'Onion', 'Garlic', 'Red Chilli', 'Pumpkin' ]
console.log(filterMethod());      // output: [ 'Onion' ]
console.log(mapMethod());         // output: [ 'Potato1', 'Tomato1', 'Onion1', 'Garlic1' ]
console.log(everyMethod());       // output: false
console.log(someMethod());        // output: true
// this function retuens undefined that why not console it, Since forEachMethod() doesn't explicitly 
// return anything, JavaScript implicitly returns undefined,
forEachMethod();                  // output: I Like Potato
                                  //         I Like Tomato
                                  //         I Like Onion
                                  //         I Like Garlic
console.log(indexOfMethod());     // output: 3 
console.log(lastIndexOfMethod()); // output: 2
console.log(joinMethod());        // output: Potato, Tomato, Onion, Garlic
console.log(toStringMethod());    // output: Potato,Tomato,Onion,Garlic
console.log(reduceMethod());      // output: PotatoTomatoOnionGarlic
console.log(reduceRightMethod()); // output: GarlicOnionTomatoPotato
console.log(reverseMethod());     // output: [ 'Garlic', 'Onion', 'Tomato', 'Potato' ]
console.log(sortMethod());        // output: [ 'Garlic', 'Onion', 'Potato', 'Tomato' ]



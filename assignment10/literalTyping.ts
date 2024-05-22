// Literal Typing:
// Literal types are types defined by specifying exact values. They are often
// used in conjunction with union types to restrict possible values.

type IYesNo = 'Yes' | 'No';
let isMarried: IYesNo = 'No';
// isMarried = "dont know";    // Error because isMarried only accepts 'Yes' and 'No'
//------------------------------------------------------------------------------------

type IIceCreamFlavours = 'Vanilla' | 'Strawberry' | 'Blueberry'
let iceCream: IIceCreamFlavours = 'Strawberry';
// iceCream = "Mango";  // Error because we did'nt define Mango in type Aliases
//------------------------------------------------------------------------------------

type ITrafficLight = 'Red' | 'Yellow' | 'Green';
let currentTraffic: ITrafficLight = 'Green';
// currentTraffic = 'Purple';  // Error because we did'nt define Mango in type Aliases
//------------------------------------------------------------------------------------


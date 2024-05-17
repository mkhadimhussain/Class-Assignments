// Nested Object
// A nested object in TypeScript refers to an object that is contained within another
// object. This concept allows you to organize and structure data hierarchically, creating 
// a tree-like structure where objects can have properties that are themselves objects.
var carInfo = {
    name: "Honda",
    model: "ABC",
    year: 2024,
    color: "Black",
    body: {
        seats: 4,
        tyers: 4
    }
};
// Printing by Dot Notation
console.log(carInfo.name); // Output: Honda
console.log(carInfo.body.seats); // Output: 4
// Printing by Square Notation
console.log(carInfo["color"]); // Output: Black
// Square Notation
var carYear = "year";
console.log(carInfo[carYear]); // Output: 2024
//-------------------------------------------------------------------------------
console.log();
// Another Example
var myInfo = {
    name: "Khadim",
    age: 23,
    rollNum: 1234,
    address: {
        country: "Pakistan",
        inCountry: {
            city: "Karachi",
            district: "East",
            nearest: {
                nearTo: "ABC School",
                houseNo: 10
            }
        }
    },
    hobbies: ["Coding", "Gym", "Photography"]
};
console.log(myInfo.address);
console.log(myInfo["address"]);
// Output
// {
//   country: 'Pakistan',
//   inCountry: {
//     city: 'Karachi',
//     district: 'East',
//     nearest: { nearTo: 'ABC School', houseNo: 10 }
//   }
// }
console.log(myInfo.address.inCountry.nearest.houseNo); // Output: 10
var homeNearest = "nearest";
console.log(myInfo[homeNearest]); // Output: undefined
var mynamee = "name";
console.log(myInfo[mynamee]); // Output: Khadim
console.log(myInfo["address"]["country"]); // Output: Pakistan
console.log(myInfo.hobbies[1]); // Output: Gym
console.log(myInfo["hobbies"[0]]); // Output: undefined

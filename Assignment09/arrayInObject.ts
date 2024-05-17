// Arrays in Object

const myFavs: {
    favNum: number,
    favColor: string,
    favFruits: string[],
    favYears: number[],
} = {
    favNum : 24,
    favColor: "Black",
    favFruits: ["Apple", "Mango", "Grapes"],
    favYears: [2020, 2022, 2023]
};

console.log(myFavs);
// Output
// {
//     favNum: 24,
//     favColor: 'Black',
//     favFruits: [ 'Apple', 'Mango', 'Grapes' ],
//     favYears: [ 2020, 2022, 2023 ]
//   }

console.log(myFavs.favFruits[1]);  // Output: Mango
console.log(myFavs.favYears[2]);   // Output: 2023
console.log(myFavs["favFruits"]);  // Output: [ 'Apple', 'Mango', 'Grapes' ] 











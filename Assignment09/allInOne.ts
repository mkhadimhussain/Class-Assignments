const myInfo: {
    name: string,
    age: number,
    isMarried: boolean,
    rollNo: string | number,
    favFruits: string[],
    favYears: number | number[], 
    address: {
        country: string,
        city: string,
        nearest: string | {
            nearTo: string,
            houseNo: number

        }
    }
} = {
    name: "Khadim",
    age: 23,
    isMarried: false,
    rollNo: 1234,
    favFruits: ["PineApple", "Mango", "Grapes"],
    favYears: [2020, 2022, 2023],
    address: {
        country: "Pakistan",
        city: "Karachi",
        nearest: {
            nearTo: "ABC School",
            houseNo: 10,
        }
    }
}

console.log(myInfo["address"] ["nearest"]);  // Output: { nearTo: 'ABC School', houseNo: 10 }
console.log(myInfo.address.nearest);         // Output: { nearTo: 'ABC School', houseNo: 10 }

console.log(myInfo.favFruits[0]);    // Output: PineApple

console.log(myInfo["favYears"][1]);  // Output: 2022











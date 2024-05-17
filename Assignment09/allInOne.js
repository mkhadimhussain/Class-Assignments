var myInfo = {
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
};
console.log(myInfo["address"]["nearest"]);
console.log(myInfo.address.nearest);
// Output: 
console.log(myInfo.favFruits[0]); // Output: 
console.log(myInfo["favYears"][1]); // Output: 

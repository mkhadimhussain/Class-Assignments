////////////////////////////////// Assignment 11 //////////////////////////////////

// This is the Assignment of Class 13.

// Question 1: Practice enum and const enum and what is the difference between them.
// Question 2: Make a function (with any name) which can accept multiple arguments and logs all
//             given arguments.

// Enums

// Enums allow us to define a set of named constants. They can be numeric or string based.
// Enum can be access by key and value.

enum TrafficLights {
    Green,      // default value is 0
    Yellow,     // default value is 1
    Red,        // default value is 2
}
// Dot Notation
console.log(TrafficLights.Green);      // Output: 0 

// Square Notation
console.log(TrafficLights["Yellow"]);  // Output: 1 

// Can access by value
console.log(TrafficLights[2]);         // Output: Red

// enum as a type
let currentTraffic: TrafficLights = TrafficLights.Red  
console.log(currentTraffic);           // Output: 2

// Can be log in variable using string data types
let previousTraffic: string = TrafficLights[0];  
console.log(previousTraffic);          // Output: Green

// Can be log in variable using number data types
let nextTraffic: number = TrafficLights["Yellow"]
console.log(nextTraffic);              // Output: 1

//------------------------------------------------------------------------------------------
console.log();

// Enum can check the first value and then get the values automatically for others elements.
// They just do the incerement in the first value if a number.

enum Days {
    "Monday" = 2,
    "Tuesday",       // value = increment in the value of "Monday" => 2 + 1 = 3
    "Wednesday",     // 4
    "Thursday",      // 5
    "Friday",        // 6
    "Saturday",      // 7
    "Sunday",        // 8
}
console.log(Days.Tuesday);      // Output: 3
console.log(Days["Thursday"]);  // Output: 5
console.log(Days[8]);           // Output: Sunday

let blessedDay: Days = Days.Friday
console.log(blessedDay);        // Output: 6

let weekend: number = Days["Saturday"];
console.log(weekend);
 
let yesterday: string = Days[2];
console.log(yesterday);         // Output: Monday

//------------------------------------------------------------------------------------------
console.log();

// If we are assigning the value in string type then we should assign the values to all elements
// becasue in string they cannot do incremment.
// In string enum each member is explicitly assigned a string value.

enum Weather {
    "Yesturday" = "Suuny Weather",
    "Today" = "Cold Weather",
    "Tommoro" = "Rainy Weather",
}
console.log(Weather.Today);             // Output: Cold Weather
console.log(Weather["Yesturday"]);      // Output: Suuny Weather
console.log(Weather["Rainy Weather"]);  // Output: undefined (String Value is not working in console)

let tommoroWeather: string = Weather.Tommoro
console.log(tommoroWeather);            // Output: Rainy Weather

// Type 'Weather' is not assignable to type 'number'.
// let todaysWeather: number = Weather["Today"];  // Error

//------------------------------------------------------------------------------------------

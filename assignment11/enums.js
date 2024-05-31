////////////////////////////////// Assignment 11 //////////////////////////////////
// This is the Assignment of Class 13.
// Question 1: Practice enum and const enum and what is the difference between them.
// Question 2: Make a function (with any name) which can accept multiple arguments and logs all
//             given arguments.
// Enums
// Enums allow us to define a set of named constants. They can be numeric or string based.
// Enum can be access by key and value.
var TrafficLights;
(function (TrafficLights) {
    TrafficLights[TrafficLights["Green"] = 0] = "Green";
    TrafficLights[TrafficLights["Yellow"] = 1] = "Yellow";
    TrafficLights[TrafficLights["Red"] = 2] = "Red";
})(TrafficLights || (TrafficLights = {}));
// Dot Notation
console.log(TrafficLights.Green); // Output: 0 
// Square Notation
console.log(TrafficLights["Yellow"]); // Output: 1 
// Can access by value
console.log(TrafficLights[2]); // Output: Red
// enum as a type
var currentTraffic = TrafficLights.Red;
console.log(currentTraffic); // Output: 2
// Can be log in variable using string data types
var previousTraffic = TrafficLights[0];
console.log(previousTraffic); // Output: Green
// Can be log in variable using number data types
var nextTraffic = TrafficLights["Yellow"];
console.log(nextTraffic); // Output: 1
//------------------------------------------------------------------------------------------
console.log();
// Enum can check the first value and then get the values automatically for others elements.
// They just do the incerement in the first value if a number.
var Days;
(function (Days) {
    Days[Days["Monday"] = 2] = "Monday";
    Days[Days["Tuesday"] = 3] = "Tuesday";
    Days[Days["Wednesday"] = 4] = "Wednesday";
    Days[Days["Thursday"] = 5] = "Thursday";
    Days[Days["Friday"] = 6] = "Friday";
    Days[Days["Saturday"] = 7] = "Saturday";
    Days[Days["Sunday"] = 8] = "Sunday";
})(Days || (Days = {}));
console.log(Days.Tuesday); // Output: 3
console.log(Days["Thursday"]); // Output: 5
console.log(Days[8]); // Output: Sunday
var blessedDay = Days.Friday;
console.log(blessedDay); // Output: 6
var weekend = Days["Saturday"];
console.log(weekend);
var yesterday = Days[2];
console.log(yesterday); // Output: Monday
//------------------------------------------------------------------------------------------
console.log();
// If we are assigning the value in string type then we should assign the values to all elements
// becasue in string they cannot do incremment.
// In string enum each member is explicitly assigned a string value.
var Weather;
(function (Weather) {
    Weather["Yesturday"] = "Suuny Weather";
    Weather["Today"] = "Cold Weather";
    Weather["Tommoro"] = "Rainy Weather";
})(Weather || (Weather = {}));
console.log(Weather.Today); // Output: Cold Weather
console.log(Weather["Yesturday"]); // Output: Suuny Weather
console.log(Weather["Rainy Weather"]); // Output: undefined (String Value is not working in console)
var tommoroWeather = Weather.Tommoro;
console.log(tommoroWeather); // Output: Rainy Weather
// Type 'Weather' is not assignable to type 'number'.
// let todaysWeather: number = Weather["Today"];  // Error
//------------------------------------------------------------------------------------------

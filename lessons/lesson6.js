//Conditional Statements

// if (condition) {
//     //execute code here
// } else {
//     //execute code here
// }

// If hour between 6 and 12 print Good Morning
// If hour between 12 and 17 print Good Afternoon
// Otherwise print Good Evening

var hour = 5

if (hour >= 6 && hour < 12) {
    console.log("Good Morning")
} else if (hour >= 12 && hour < 17) {
    console.log("Good Afternoon")
} else {
    console.log("Good Evening")
}

var ageISMoreThanEighteen = true
var isUSCitizen = true
if (ageISMoreThanEighteen && isUSCitizen) {
    console.log("This customer is eligible for a driver's license.")
} else {
    console.log("This customer is not eligible for a driver's license.")
}   
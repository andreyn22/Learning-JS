//Concatenation and Interpolation
var price = 50
var itemName = "Cup"

// var messageToPrint = "The price for your Cup is 50 dollars"
var messageToPrint1 = "The price for your " +itemName+" is "+price+" dollars" // Approach 1 concatenation
console.log(messageToPrint1)

var price =60
var itemName = "Notebook"
// var messageToPrint2 = "The price for your Notebook is 60 dollars"
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` // Approach 2 interpolation
console.log(messageToPrint2)

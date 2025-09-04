//Declarative function - can be called before it is defined
helloOne()  
function helloOne() {
    console.log("Hello One")
}
helloOne()  


//Anonymous function - cannot be called before it is defined
var helloTwo = function() {
    console.log("Hello Two")
}
helloTwo()

//Arrow function (ES6) - cannot be called before it is defined
var helloThree = () => {
    console.log("Hello Three")
}
helloThree()

//Function with arguments 1
function sum(a, b) {
    return a + b
}
sum(5, 10)

//Function with arguments 2
function printName(name){
    console.log(name)
}
printName("Andrew", "Smith")  //only first argument is passed


//Function with return value
function multiplyByTwo(number) {
    var result =  number * 2
    return result
}
var myResult = multiplyByTwo(5)
console.log(myResult)  //10

//Import function from another file
import { printAge } from '../helpers/printHelper.js'
printAge(30)

//Import everything from another file
import * as helper from '../helpers/printHelper.js' 
helper.initMessage()

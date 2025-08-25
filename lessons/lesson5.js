// Logical "AND"
console.log(true && true);  // all values have to be TRUE for expression to be TRUE
console.log(true && false); // at least one value is FALSE, so expression is FALSE
console.log(false && false); // all values are FALSE, so expression is FALSE


// Logical "OR"
console.log(true || false); // any value should be TRUE for the expression to be TRUE
console.log(false || false); // all values are FALSE, so expression is FALSE


var ageISMoreThanEighteen = true
var isUSCitizen = false
// var eligibilityForDriversLicense = ageISMoreThanEighteen && isUSCitizen
var eligibilityForDriversLicense = ageISMoreThanEighteen ||isUSCitizen
console.log('This customer is ' + (eligibilityForDriversLicense ? 'eligible' : 'not eligible') + ' for a driver\'s license.')

// Logical "NOT"
console.log(!true); // NOT TRUE = FALSE
console.log(6 == 10); // FALSE
console.log(!(6 == 10)); // NOT FALSE = TRUE
console.log(6 !== 10); // TRUE

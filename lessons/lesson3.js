// Objects
var customer = {
    firstName: "Andrei",
    lastName: "Negura",
    age: 30,
    email: "andrei.negura@example.com"
};
console.log("Print the entire object: ", customer);
console.log("Print the first value of the object: ", customer.firstName);

console.log(customer.lastName)
console.log(customer['lastName'])

customer.firstName = "Mike" //Dot notation
customer['lastName'] = "Silver" // Bracket notation
console.log(`${customer.firstName} ${customer.lastName}`)

// Arrays
var car = ["Volvo", "Honda", "Toyota"];
console.log(car[0])

car[1] = "BMW" // replacing the value for the second element
console.log(car[1])

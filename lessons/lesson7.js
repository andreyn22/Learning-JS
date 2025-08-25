// Loops

for (let i = 0; i < 5; i++) {
    console.log('Hello World')
}
console.log('Hello World')


// var VS let

// Ex. 1: using var
for (var i = 0; i < 3; i++) {
    console.log("Inside loop with var:", i);
}
console.log("Outside loop with var:", i); // i exist, has value of 3

// Ex. 2: using let
for (let j = 0; j < 3; j++) {
    console.log("Inside loop with let:", j);
}
console.log("Outside loop with let:", typeof j); // j does NOT exist => ReferenceError: j is not defined


// for of loop
var car = ['BMW', 'Mercedes', 'Audi']
for (let item of car) {
    console.log("Car model:", item);
    if (item == 'Toyota') {
        break
    }
}   


// E56 syntax for each
car.forEach( car => {
    console.log(car);
});
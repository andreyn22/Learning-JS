/*
  JavaScript Practice Exercise:

  Create a function that recommends a car for a family based on:
  - familySize
  - plannedDistanceToDrive

  Rules:
  1. If familySize <= 4 and plannedDistanceToDrive < 200 => "Tesla"
  2. If familySize <= 4 and plannedDistanceToDrive >= 200 => "Toyota Camry"
  3. If familySize > 4 => "Minivan"
*/


// Initial variables
let familySize = 4;
let plannedDistanceToDrive = 500;

// Function to recommend a car
function recommendedCar(familySize, plannedDistanceToDrive) {
  if (familySize <= 4 && plannedDistanceToDrive < 200) {
    return "Tesla";
  } else if (familySize <= 4 && plannedDistanceToDrive >= 200) {
    return "Toyota Camry";
  } else if (familySize > 4) {
    return "Minivan";
  }
}

// Test the function
console.log(recommendedCar(familySize, plannedDistanceToDrive));

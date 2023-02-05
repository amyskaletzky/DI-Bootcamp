'use strict'

// Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle() {
//     return true;
// }


// Transform the winBattle() function to an arrow function.
const winBattle = () => true

// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator.If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
let experiencePoints = winBattle() ? 10 : 1

// Console.log the experiencePoints variable.
console.log(experiencePoints);
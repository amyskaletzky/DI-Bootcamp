'use strict'

// 🌟 Exercise 5 : Colors #2
// Instructions
// Using these arrays:
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];


// Write a JavaScript program that displays the colors in the following order: “1st choice is Blue.” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint: Use the array methods taught in class and ternary operator.

colors.forEach((color, index) => {
    let newIndex = index + 1
    console.log(`${newIndex}${getCorrectOrdinal(newIndex)} choice is ${color}`);
})

function getCorrectOrdinal(index) {
    return ([1, 2, 3].includes(index)) ? ordinal[index] : ordinal[0]
}
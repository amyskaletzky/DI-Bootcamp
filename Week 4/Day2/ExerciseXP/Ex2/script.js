'use strict'

// Exercise 2 : Kg And Grams
// Instructions:
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
function weightConverter(weight) {
    return `${weight * 1000}g`
}
console.log(weightConverter(5));

// Then, use function expression and invoke it.
const res = weightConverter(5)
console.log(res);


// Write in a one line comment, the difference between function declaration and function expression.
// i think the main difference is that in a function declaration, the function has a name whereas in a function expression, the function is anonymous


// Finally, use a one line arrow function and invoke it.
const convertWeight = (weight) => { return `${weight * 1000}g` }
console.log(convertWeight(10));
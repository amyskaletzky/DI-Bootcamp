'use strict'

// Exercise 1 : Favorite Color
// Instructions:
// 1. Write some simple Javascript code that will join all the items in the array above, and console.log the result.

let sentence = ["my", "favorite", "color", "is", "blue"];
let connectedSentence = sentence.join(" ")
console.log(connectedSentence);

// Exercise 2 : Mixup
// Instructions
// Create 2 variables.The values should be strings.

let str1 = "pizza";
let str2 = "lasagna";

let twoLettersStr1 = str1.slice(0, 2)
let twoLettersStr2 = str2.slice(0, 2)

let lettersRemovedStr1 = str1.slice(2);
let lettersRemovedStr2 = str2.slice(2);

let newWord = `${twoLettersStr2}${lettersRemovedStr1} ${twoLettersStr1}${lettersRemovedStr2}`

console.log(newWord);



// Exercise 3 : Calculator
// Instructions:
// Make a Calculator.Follow the instructions:

// 1. Prompt the user for the first number.
// 2. Store the first number in a variable called num1.
//     Hint : console.log the type of the variable num1.What should you do to convert it to a number ?
// 3. Prompt the user for the second number.
// 4. Store the second number in a variable called num2.
// 5. Create an Alert where the value is the SUM of num1 and num2.
// 6. BONUS: Make a program that can subtract, multiply, and also divide!

let num1 = +prompt('Please enter a random number')
let num2 = +prompt('Please enter a second number')

let sum = num1 + num2
let subtract = num1 - num2
let multiply = num1 * num2
let division = num1 / num2
let alertMessage = `Addition: ${sum}, Subtraction: ${subtract}, Multiplication; ${multiply}, and Division: ${division}`
alert(alertMessage)

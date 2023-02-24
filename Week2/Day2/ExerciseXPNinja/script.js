'use strict'

// Exercise 1 : Age Difference
// Instruction:
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

let personYear1 = 1996
let personYear2 = 2001
const currentYear = 2023
let agePerson1 = currentYear - personYear1
let agePerson2 = currentYear - personYear2
let result

if (agePerson1 > agePerson2) {
    result = parseInt(currentYear - (agePerson2 - (agePerson1 / 2)))
} else {
    result = parseInt(currentYear - (agePerson1 - (agePerson2 / 2)))
}
console.log(result)


// Exercise 2 : Zip Codes
// Instruction:
// Harder exercise
// Hint: This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace(spaces)
// Must not be greater than 5 digits in length

let zipCode = prompt('Enter your zip code')
let res = zipCode.indexOf(' ')
let length = zipCode.length
let num = +zipCode
console.log(res);

if (length === 5 && res === -1 && typeof num === 'number') {
    res = 'success'
} else {
    res = 'error'
}
console.log(res);

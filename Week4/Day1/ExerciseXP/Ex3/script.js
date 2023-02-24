'use strict'

// Exercise 3 : Is It A String ?
// Instructions:
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not.
// Use ternary operator


const isString = (arg) => {
    return (typeof arg === 'string') ? true : false
}

console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));
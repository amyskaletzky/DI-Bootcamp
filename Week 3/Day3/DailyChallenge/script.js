'use strict'

// Create an input type text that takes / shows only letters. (ie.numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event --> this one i think

// Hint: Check out keycodes in Javascript or Regular Expressions

const form = document.createElement('form')
document.body.appendChild(form)
const input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('id', 'txt')
input.setAttribute('name', 'txt')
form.appendChild(input)

input.addEventListener('input', checkOnlyLetters)

function checkOnlyLetters(evt) {
    console.log(evt);
    console.log(input.value);
    let letters = /^[A-Za-z]+$/;
    let inputVal = input.value
    console.log(!inputVal.match(letters));
    if (!inputVal.match(letters)) {
        var res = inputVal.replace(/[^a-zA-Z ]/g, "");
        console.log(res);
    }

}

// var res = inputVal.replace(/\d.*\d/, "");   

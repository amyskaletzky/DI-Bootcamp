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

input.addEventListener('keyup', checkOnlyLetters)

function checkOnlyLetters(evt) {
    console.log(evt);
    console.log(input.value);
    let letters = /^[A-Za-z]+$/;
    let inputVal = input.value
    console.log(!inputVal.match(letters));
    if (!inputVal.match(letters)) {
        var res = inputVal.replace(/\d.*\d/, "");
        console.log(res);
    }

}


// const str = 'mi5lk an3d45 @#$%&!br3ead';

// const noSpecialChars = str.replace(/[^a-zA-Z ]/g, '');

// console.log(noSpecialChars);

// const str = 'mi5lk an3d45 @#$%&!br3ead';
// const letter = /^[A-Za-z]+$/;
// const noSpecialChars = str.replace(/[^a-zA-Z ]/g, '');

// console.log(noSpecialChars);
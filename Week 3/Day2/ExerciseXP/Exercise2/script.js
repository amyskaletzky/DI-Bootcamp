'use strict'

// Retrieve the form and console.log it.

const form = document.forms[0]
console.log(form);

// Retrieve the inputs by their id and console.log them.

const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const submit = document.getElementById('submit')

console.log(fname);
console.log(lname);
console.log(submit);

// Retrieve the inputs by their name attribute and console.log them.

const fnameInput = document.getElementsByName('fname')
const lnameInput = document.getElementsByName('lname')

console.log(fnameInput);
console.log(lnameInput);


// When the user submits the form(ie.submit event listener)
// use event.preventDefault(), why ?
//     get the values of the input tags,
//         make sure that they are not empty,
//             create an li per input value,
//                 then append them to a the < ul class="usersAnswer" ></ul >, below the form.


form.addEventListener('submit', getUserInput)
const ul = document.querySelector('.usersAnswer')


function getUserInput(evt) {
    evt.preventDefault()

    if (fname.value === '' || lname.value === '') return

    const fnameLi = document.createElement('li')
    const lnameLi = document.createElement('li')
    const fnameContent = document.createTextNode(fname.value)
    const lnameContent = document.createTextNode(lname.value)

    fnameLi.appendChild(fnameContent)
    lnameLi.appendChild(lnameContent)
    ul.appendChild(fnameLi)
    ul.appendChild(lnameLi)

}

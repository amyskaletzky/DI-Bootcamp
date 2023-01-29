'use strict'

// Add a “light blue” background color and some padding to the <div>.

const div = document.body.firstElementChild
div.style.backgroundColor = 'lightblue'
div.style.padding = '1rem'


// Do not display the <li> that contains the text node “John”.

const Ul = document.querySelector('ul')
const firstLi = Ul.firstElementChild
firstLi.style.display = 'none'


// Add a border to the <li> that contains the text node “Pete”.

const peteLi = Ul.children[1]
peteLi.style.border = '2px solid blue'


// Change the font size of the whole body.

const body = document.body
body.style.fontSize = '2rem'


// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if (div.style.backgroundColor === 'lightblue') alert(`Hello ${firstLi.textContent} and ${peteLi.textContent}`)

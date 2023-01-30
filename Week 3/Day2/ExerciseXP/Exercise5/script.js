'use strict'

// Exercise 5 : Event Listeners
// Instructions
// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.

// my comment: I used a part of ex1's html 

const h2 = document.querySelector('h2')
h2.addEventListener('click', alignRight)
h2.addEventListener('mouseover', changeColour)
h2.addEventListener('mouseout', changeBgColour)
h2.addEventListener('dblclick', changeFontSize)

function alignRight() {
    h2.style.margin = '2rem';
}

function changeColour() {
    h2.style.color = 'pink';
}

function changeBgColour() {
    h2.style.backgroundColor = 'darkblue';
    h2.style.color = 'white';

}

function changeFontSize() {
    h2.style.fontSize = '4rem';
}
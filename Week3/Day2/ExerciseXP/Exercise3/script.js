'use strict'

// In the JS file:

// Declare a global variable named allBoldItems.
var allBoldItems

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBold_items() {
    allBoldItems = document.querySelectorAll('strong')
}
getBold_items()

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    for (let text of allBoldItems) {
        text.style.color = 'blue'
    }
}

// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal() {
    for (let text of allBoldItems) {
        text.style.color = 'black'
    }
}


// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

const p = document.body.firstElementChild
p.addEventListener('mouseover', highlight)
p.addEventListener('mouseout', return_normal)

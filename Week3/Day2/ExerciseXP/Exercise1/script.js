'use strict'

// Using a DOM property, retrieve the h1 and console.log it.
const h1 = document.body.firstElementChild.firstElementChild
console.log(h1);



// Using DOM methods, remove the last paragraph in the < article > tag.
const article = document.querySelector('article')
article.lastElementChild.remove()


// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.querySelector('h2')
h2.addEventListener('click', changeBgColour)

function changeBgColour() {
    h2.style.backgroundColor = 'red'
}


// Add an event listener which will hide the h3 when it’s clicked on(use the display: none property).
const h3 = document.querySelector('h3')
h3.addEventListener('click', hideElement)

function hideElement() {
    h3.style.display = 'none'
}


// Add a < button > to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const newBtn = document.createElement('button')
newBtn.style.width = '4rem'
newBtn.style.height = '2rem'
const content = document.createTextNode('Bold')
newBtn.appendChild(content)
document.body.appendChild(newBtn)
newBtn.addEventListener('click', makeBold)

const paragraphs = document.querySelectorAll('p')

function makeBold() {
    for (let p of paragraphs) {
        p.style.fontWeight = 'bold'
    }
}


// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

h1.addEventListener('mouseover', changeFontSize)

function changeFontSize() {
    h1.style.fontSize = getRndInteger(0, 101) + 'px'
}

// BONUS: When you hover on the 2nd paragraph, it should fade out(Check out “fade css animation” on Google)

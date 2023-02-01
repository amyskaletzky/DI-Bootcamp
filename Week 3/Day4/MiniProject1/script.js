'use strict'

// create array 21 colours
let mouseDown = false

const array = ['red', '#ff4500', '#ffa500', 'yellow', '#9acd32', '#90ee90', '#008000', '#40e0d0', '#00ffff', '#87cefa', '#1e90ff', '#0000ff', '#00008b', '#4b0082', '#8b008b', '#ee82ee', '#ffb6c1', '#d3d3d3', '#808080', 'black', 'white']
const section1 = document.getElementById('section1')
const section2 = document.getElementById('section2')
const btn = document.querySelector('.clear')


function createPallette() {
    for (let colour in array) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('colour-div')
        newDiv.style.backgroundColor = array[colour]
        if (array[colour] === 'black') newDiv.style.border = "1px solid white"

        newDiv.addEventListener('click', retrieveColour)

        section1.appendChild(newDiv)
    }
}
createPallette()

let counter = 0
function createGridSection() {
    while (counter <= 1440) {
        counter++
        const newDiv = document.createElement('div')
        newDiv.classList.add('empty')
        newDiv.style.backgroundColor = 'white'
        newDiv.addEventListener('click', addColour)
        newDiv.addEventListener('mousedown', addColourMouseDown)
        newDiv.addEventListener('mouseover', addColourMouseOver)
        newDiv.addEventListener('mouseup', () => { mouseDown = false })
        section2.appendChild(newDiv)
    }
}
createGridSection()


let colour
function retrieveColour(evt) {
    colour = evt.target.style.backgroundColor
    console.log(colour);
    return colour
}


function addColour(evt) {
    evt.target.style.backgroundColor = colour;
}

function addColourMouseDown(evt) {
    mouseDown = true
    if (evt.type === 'mousedown') evt.target.style.backgroundColor = colour;
}

function addColourMouseOver(evt) {
    if (colour !== '' && mouseDown) evt.target.style.backgroundColor = colour;
}

btn.addEventListener('click', clearGridColour)

function clearGridColour() {
    for (let i of section2.children) {
        i.style.backgroundColor = 'white'
    }
}
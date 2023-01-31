'use strict'

// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

setTimeout(helloWorld, 2000)

function helloWorld() {
    alert('Hello World')
}

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph < p > Hello World</p > to the < div id = "container" >.

const div = document.getElementById('container')
// setTimeout(newPara, 2000)
let counter = 0

function newPara() {
    counter++
    const para = document.createElement('p')
    const content = document.createTextNode('Hello World')
    para.appendChild(content)
    div.append(para)
    if (counter === 5) stopInterval()
}


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let idInterval
idInterval = setInterval(newPara, 2000)

const btn = document.getElementById('clear')
btn.addEventListener('click', stopInterval)

function stopInterval() {
    clearInterval(idInterval)
}

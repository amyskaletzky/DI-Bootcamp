'use strict'

// Get the value of each of the inputs in the HTML file when the form is submitted.Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
//     Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed(but keep the values entered by the user).The user could click the button at least three times and get a new story.Display the stories randomly.


const form = document.forms[0]
const noun = document.getElementById('noun')
const adj = document.getElementById('adjective')
const person = document.getElementById('person')
const verb = document.getElementById('verb')
const place = document.getElementById('place')
const span = document.querySelector('#story')


form.addEventListener('submit', createStory)


function createStory(evt) {
    evt.preventDefault()
    if (!adj.value, !verb.value, !person.value, !noun.value, !place.value) return
    let sentence = `${adj.value} ${person.value} ${verb.value} ${noun.value} ${place.value}`
    span.textContent = sentence
}
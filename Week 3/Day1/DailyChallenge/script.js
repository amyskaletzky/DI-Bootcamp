'use strict'

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']


function renderPlanets() {
    const container = document.querySelector('.listPlanets')
    for (let planet in planets) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('planet')
        newDiv.classList.add(`${planets[planet].toLowerCase()}`)
        container.appendChild(newDiv)
    }
}

renderPlanets()
// Exercise 1: Conversion
// Instructions

fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result));

// Convert the promise above into async await:

async function starWars() {
    const response = await fetch("https://www.swapi.tech/api/starships/9/")
    const objStarWars = await response.json()
    console.log(objStarWars.result)
}

starWars()
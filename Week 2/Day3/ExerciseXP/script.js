'use strict'

// Exercise 1 : List Of People
// Instructions:

// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index.take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array ?

const people = ['Greg', 'Mary', 'Devon', 'James']
people.shift()              // could also find index of 'greg' and then splice it out but i wanted to try to use other methods
let index = people.indexOf('James')
people.splice(index, 1, 'Jason')
people.push('Amy')
let indexMary = people.indexOf('Mary')
console.log(indexMary)

let peopleCopy = people.slice(1, people.length - 1)

let fooIndex = people.indexOf('Foo')
console.log(fooIndex); //returns -1 because there is no 'Foo' therefore it returns -1

let last = people[people.length - 1]

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.


for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.

for (let i = 0; i < people.length; i++) {
    let person = people[i]
    console.log(person);
    if (person === "Jason") {
        break
    }
}


// 🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

const colors = ['pink', 'red', 'turquoise', 'lilac', 'maroon']
const suffix = ['st', 'nd', 'rd', 'th', 'th']
let sentence

for (let i = 0; i < colors.length; i++) {
    sentence = `My ${i + 1}${suffix[i]} choice is ${colors[i]}`
    console.log(sentence);
}

// Exercise 3 : Repeat The Question
// Instructions:
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt(ie.Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation ?

let num = +prompt('Enter a number')

while (num < 10) {
    num = +prompt('Enter a number')
}

// Exercise 4 : Building Management
// Instructions:
// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.If it is, than increase Dan’s rent to 1200.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

console.log('There are ' + building['numberOfFloors'] + ' floors');

let numOfAptFloor1 = building['numberOfAptByFloor']['firstFloor']
let numOfAptFloor3 = building['numberOfAptByFloor']['thirdFloor']
console.log(`There are ${numOfAptFloor1} apartments on the first floor`)
console.log(`There are ${numOfAptFloor3} apartments on the third floor`)

let nameTenant2 = building['nameOfTenants'][1].toLowerCase()
let numberOfRooms = building['numberOfRoomsAndRent'][nameTenant2][0]
console.log(`${nameTenant2} has ${numberOfRooms} rooms in his apartment`)

let sum = building['numberOfRoomsAndRent']['sarah'][1] + building['numberOfRoomsAndRent']['david'][1]
let danRent = building['numberOfRoomsAndRent']['dan'][1]

if (sum > danRent) {
    building['numberOfRoomsAndRent']['dan'][1] = 1200
}


// Exercise 5 : Family
// Instructions:
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

let family = {
    mum: 'Mardia',
    dad: 'Ronen',
    child: 'Amy',
    cousin: 'Lotem'
}

for (let property in family) {
    console.log('key: ' + property)
}

for (let property in family) {
    console.log('values: ' + family[property])
}

// Exercise 6 : Rudolf
// Instructions:
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
}

let lengthDetails = Object.keys(details).length
let newSentence = ''

for (let property in details) {
    newSentence += `${property} ${details[property]} `
}
console.log(newSentence)

// Exercise 7 : Secret Group
// Instructions:
// A group of friends have decided to start a secret society.The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society.The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
const firstLetters = []

for (let i = 0; i < names.length; i++) {
    firstLetters[i] = names[i][0]
}
console.log(firstLetters.sort().join(''))

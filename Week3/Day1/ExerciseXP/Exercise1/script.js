'use strict'

// Retrieve the div and console.log it

const firstDiv = document.body.firstElementChild
console.log(firstDiv);


// Change the name “Pete” to “Richard”

const firstUl = document.body.children[1]
const firstUlSecondLi = firstUl.lastElementChild
firstUlSecondLi.textContent = 'Richard'


// Change each first name of the two < ul > 's to your name.
const Ul = document.querySelectorAll('.list')
const firstUlLi = Ul[0].firstElementChild
const secondUlLi = Ul[1].firstElementChild
firstUlLi.textContent = secondUlLi.textContent = 'Amy'

// Delete the < li > that contains the text node “Sarah”.
const sarahLi = Ul[1].children[1]
sarahLi.remove()


// Bonus - Using Javascript:
// Add a class called student_list to both of the < ul > 's.

Ul[0].classList.add('student_list')
Ul[1].classList.add('student_list')


// Add the classes university and attendance to the first < ul >.
Ul[0].classList.add('university')
Ul[0].classList.add('attendance')

    
'use strict'
// Exercise 1 : The World Translator
// Instructions:
// Hint: Use Switch Case

// Ask the user which language they speak.

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement.For example “english” or “English” or “ENGlish” ect…”

// Create a few conditions:
// If the user speaks French: display “Bonjour”
// If the user speaks English: display “Hello”
// If the user speaks Hebrew: display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’

let lang = prompt("Which language do you speak? (english, french, hebrew)").toLowerCase()

switch (lang) {

    case "english":
        alert("Hello")
        break
    case "hebrew":
        alert("Shalom")
        break
    case "french":
        alert("Bonjour")
        break
    default:
        alert("01110011 01101111 01110010 01110010 01111001")
}

// Exercise 2 : The Grade Assigner
// Instructions:
// Ask the user for their grade.

// If the grade is bigger than 90, console.log “A”

// If the grade is between 80 and 90(included), console.log “B”
// If the grade is between 70(included) and 80(included), console.log “C”
// If the grade is lower than 70, console.log “D”

let grade = +prompt('Enter your grade')

if (grade > 90) {
    console.log('A');
} else if (grade > 80 && grade <= 90) {
    console.log('B');
} else if (grade >= 70 && grade <= 80) {
    console.log('C');
} else {
    console.log('D');
}
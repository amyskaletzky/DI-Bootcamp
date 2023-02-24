'use strict'


// Exercise 1
5 >= 1
// prediction: true as 5>1
// outcome: true

0 === 1
// prediction: false, as 0 !== 1
// outcome: false
4 <= 1
// prediction: false, 4>1
// outcome: false
1 != 1
// prediction: false, as 1===1
// outcome:false
"A" > "B"
// prediction: false, as B is 066 and A is 065 therefore 'A' < 'B' ?    
// outcome: false
"B" < "C"
// prediction: true, as B is 066 and C is 067 therefore 'B' < 'C'
// outcome: true
"a" > "A"
// prediction: true, as 'a' is 097 and 'A' is 065 so 'a'>'A' i think
// outcome: true
"b" < "A"
// prediction: false, as 'b' is 098 and 'A' is 065 so 'b'>'A'
// outcome: false
true === false
// prediction: false as true!=false
// outcome:false
true != true
// prediction: false, as true===true
// outcome: false


// Exercise 2
// Ask the user for a string of numbers separated by commas
// Console.log the sum of the numbers.
//     Hint: use some string methods


let stringNums = prompt('Enter numbers in a string separated by a comma')
let nums = stringNums.slice(1, -1)

nums = nums.split(', ')
console.log(nums)

nums = nums.map(elem => parseInt(elem, 10))

let sum = nums.reduce(function (a, b) {
    return a + b;
});
console.log(sum)


// Exercise 3: Find N
// Instructions:
// Hint: if statement(tomorrow’s lesson)

// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.

let sentence = prompt("Type in a sentence with the word 'Nemo' ").toLowerCase()

if (sentence.includes('nemo')) {
    sentence = sentence.split(' ')
    let index = sentence.indexOf('nemo')
    let newSentence = `I found Nemo at ${index}`
    console.log(newSentence)
}
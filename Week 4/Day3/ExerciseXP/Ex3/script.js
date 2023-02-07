// Exercise 3 : Star Wars
// Instructions
// Use the reduce() method to combine all of these into a single string.

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sentence = epic.reduce((acc, word) => {
    return acc += ' ' + word
}, '')
console.log(sentence)


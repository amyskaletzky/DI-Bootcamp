// Exercise 1 : Reading From A File In Node.JS
// Instructions
// Create a text file and write something inside(example: ‘Some Text To See’)
// Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal

const fs = require('fs')

fs.readFile('text.txt', 'utf-8', (err, data) => {
    console.log(data)
})

// Creating the new 'data' file
// const data = 'Bla bla'
// fs.writeFile('data', data, 'utf-8', (err) => {
//     if (err) return console.log(err);
//     console.log('file created')
// })

const newData = ' more bla bla bla'
fs.appendFile('data', newData, 'utf-8', (err, data) => {
    if (err) return console.log(err);
    console.log('data appended')

})

fs.readFile('data', 'utf-8', (err, data) => {
    console.log(data)
})

fs.unlink('data', (err) => {
    console.log(err)
})
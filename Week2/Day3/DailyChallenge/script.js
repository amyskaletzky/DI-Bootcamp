'use strict'

// first by using one loop 

let line = '*'
for (let i = 0; i < 6; i++) {
    console.log(line);
    line += ' *'
}

console.log('')


// with nested loop
let newLine
for (let i = 0; i < 6; i++) {
    newLine = ''
    for (let x = 0; x <= i; x++) {
        newLine += '* '
    }
    console.log(newLine);
}



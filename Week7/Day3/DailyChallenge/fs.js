const fs = require('fs')

let count = 0
let position = 0

// Use the corresponding operations to calculate the final position 
// at the end of the file - The answer should be: 74 steps to the right.


// fs.readFile('RightLeft.txt', 'utf-8', (err, data) => {
//     if (err) return console.log(err)
//     const dataArray = data.split('')
//     console.log(dataArray);
//     dataArray.forEach(el => {
//         count++

//         if (el === '>') {
//             position++
//         } else if (el === '<') {
//             position--
//         }

//     })
//     console.log(position)
//     console.log(position, ' total step right')

// })



// Use the corresponding operations to calculate the number of steps needed 
// to hit position the - 1 for the first time - The answer should be: 1795 steps.
fs.readFile('RightLeft.txt', 'utf-8', (err, data) => {
    const dataArray = (data.split(''))
    for (let i = 0; i < dataArray.length; i++) {
        count++
        if (dataArray[i] === '>') {
            position++
        } else if (dataArray[i] === '<') {
            position--
        }
        if (position == -1) {
            console.log('number of steps', count)
            break;
        }
    }
})
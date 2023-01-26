'use strict'

function lengthLongestWord(arr) {
    var lengthLongestWord = 0

    for (let word of arr) {

        if (lengthLongestWord < word.length) {
            lengthLongestWord = word.length
        }
    }
    return lengthLongestWord
}


function wordsInTheStars() {
    let array = []
    let words = prompt('Enter several words (separated by commas)')
    array = words.split(', ')
    let length = lengthLongestWord(array)

    let sentence = '*'
    let sentenceInBetween = ''
    console.log(sentence.repeat(length + 4))

    for (let i = 0; i < array.length; i++) {
        sentenceInBetween = `* ${array[i]} ${' '.repeat(length - array[i].length)}*`
        console.log(sentenceInBetween);
    }

    console.log(sentence.repeat(length + 4))
}

wordsInTheStars()
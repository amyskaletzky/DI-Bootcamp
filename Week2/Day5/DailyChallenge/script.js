'use strict'

let numOfBeers = +prompt('Enter a number from which to begin counting down the bottles')
let numOfBeersSubtracted = 1

function bottlesOfBeer() {
    while (numOfBeers > 0) {
        let sentence = createSentence(numOfBeers, numOfBeersSubtracted)
        numOfBeers -= numOfBeersSubtracted
        numOfBeersSubtracted++
        console.log(sentence)
    }
}

bottlesOfBeer()
function createSentence(num, subtract) {
    let newNum = num - subtract
    if (newNum < 0) newNum = 'no'
    let btl = checkBtls(num)
    let itOrThem = checkItOrThem(subtract)
    const sentence = `${num} ${btl} of beer on the wall
                        ${num} ${btl} of beer
                        Take ${subtract} down pass ${itOrThem} around 
                        ${newNum} ${checkBtls(num - subtract)} of beer on the wall`
    return sentence
}

function checkBtls(num) {
    if (num > 1 || num === 0) {                 // i know it said to do '0 bottle' but i'm pretty sure it's incorrect grammar :) so i wanted to try this way 
        return 'bottles'
    } else {
        return 'bottle'
    }
}

function checkItOrThem(num) {
    if (num === 1) {
        return 'it'
    } else {
        return 'them'
    }

}

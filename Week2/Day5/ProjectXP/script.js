'use strict'


function playTheGame() {
    if (window.confirm('Would you like to play the game?')) {
        let userNum = +prompt('Please enter a number between 0 and 10')
        let computerNumber
        if (!isNaN(userNum) && userNum) {
            if (userNum >= 0 && userNum <= 10) {
                computerNumber = getRandomInt(11)
                console.log(computerNumber);
                compareNumbers(userNum, computerNumber)
            } else {
                alert('Sorry it\'s not a good number, Goodbye')
            }
        } else {
            alert('Sorry, not a number, Goodbye')
        }
    } else {
        alert('No problem, Goodbye')
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function compareNumbers(userNumber, computerNumber) {
    for (let i = 0; i <= 2; i++) {
        if (userNumber === computerNumber) {
            alert('WINNER')
            return

        } else if (userNumber > computerNumber) {
            alert('Your number is bigger than the computer\'s')
            if (endGame(i)) return
            userNumber = +prompt('Enter a new number')

        } else if (userNumber < computerNumber) {
            alert('Your number is smaller than the computer\'s')
            if (endGame(i)) return
            userNumber = +prompt('Enter a new number')
        }
    }


}

function endGame(index) {
    if (index === 2) {
        alert('out of chances')
        return true
    } else {
        return false
    }
}

'use strict'

// Exercise 1: Your Favorite Food
// Instructions:
// 1. Store your favorite food into a variable.

// 2. Store your favorite meal of the day into a variable(ie.breakfast, lunch or dinner)

// 3. Console.log I eat < favorite food > at every < favorite meal >


let faveFood = 'spaghetti'
let faveMeal = 'dinner'

console.log(`I eat ${faveFood} at every ${faveMeal}`)

// Exercise 2 : Series
// Instructions:
// Part I
// Using this array: const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// 1. Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// 2. Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
//    For example: black mirror, money heist, and the big bang theory

// 3. Console.log a sentence using both of the variables created above
//    For example: I watched 3 series: black mirror, money heist, and the big bang theory

const myWatchedSeries = ['black mirror', 'money heist', 'the big bang theory']
let myWatchedSeriesLength = myWatchedSeries.length
let myWatchedSeriesSentence = myWatchedSeries.join(', ')

let sentence = `I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`
console.log(sentence);

// Part II
// Change the series “the big bang theory” to “friends”.Hint: You will need to use the index of “the big bang theory” series.
//     Add, at the end of the array, the name of another series you watched.
//         Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.


let indexBlackMirror = myWatchedSeries.indexOf('black mirror')
myWatchedSeries.splice(indexBlackMirror, 1, 'friends', 'the flash')
myWatchedSeries.splice(0, 1, 'sherlock')
myWatchedSeriesSentence = myWatchedSeries.join(', ')
console.log(myWatchedSeries[1].charAt(2))
console.log(myWatchedSeries)

// Exercise 3 : The Temperature Converter
// Instructions:
// 1. Store a celsius temperature into a variable.

// 2. Convert it to fahrenheit and console.log < temperature >°C is < temperature >°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit ? (ie.point 2)
// Hint: To convert a temperature from celsius to fahrenheit: Divide it by 5, then multiply it by 9, then add 32

let cTemp = 11
let fTemp = (cTemp * 9 / 5) + 32

let convert = `${cTemp}°C is ${fTemp}°F`
console.log(convert)


//  Exercise 4 : Guess The Answers #1
// Instructions:
// For each expression, predict what you think the output will be in a comment(//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console.Note the actual output in a comment and compare it with your prediction.

let c
let a = 34
let b = 21

console.log(a + b) //first expression
// Prediction: It will output 55, because both a and b are numbers
// Actual: 55

a = 2

console.log(a + b) //second expression
// Prediction: It will be 23, because the value inside of variable a has been changed to a different number
// Actual: 23

console.log(c)
// What is the value of c?
// prediction: undefined, as variable c was created, but no value was/is assigned to it
// actual: undefined


console.log(3 + 4 + '5')
// prediction: undefined as you cannot add together different data types 
// actual: 75

// i was wrong-> i guess it adds it to the end of the 7 from the 3+4, therefore resulting in 75.


// Exercise 5 : Guess The Answers #2
// Instructions:
// For each expression, predict what you think the output will be in a comment(//) without first running the command.
//     Of course, explain each prediction.
// Then run the expression in the console.Note the actual output in a comment and compare it with your prediction.


typeof (15)
// Prediction: number
// Actual: number

typeof (5.5)
// Prediction: number
// Actual: number

typeof (NaN)
// Prediction: number, i'll be honest and say i read about typeOf() before these exercises, and i remember that it's not undefined
// Actual: number

typeof ("hello")
// Prediction: string
// Actual: string

typeof (true)
// Prediction: boolean
// Actual: boolean

typeof (1 != 2)
// Prediction: boolean, because it returns 'false' and that is a boolean data type
// Actual: boolean

"hamburger" + "s"
// Prediction: "hamburgers", as they are both strings
// Actual:"hamburgers"

"hamburgers" - "s"
// Prediction: "hamburger", as they are both strings
// Actual: NaN

"1" + "3"
// Prediction: '13', as they are both strings and not numbers
// Actual: '13'

"1" - "3"
// Prediction: NaN, i think it's the same as "hamburgers" - "s"
// Actual: -2

// i was wrong i guess it works hahaha

"johnny" + 5
// Prediction: 'johnny5'
// Actual: 'johnny5'

"johnny" - 5
// Prediction: NaN, because it is subtracting a number from a string (that does not contain a number inside the '')
// Actual: NaN

99 * "hello"
// Prediction: NaN, because you cannot multiply a number by a string (that does not contain a number inside the '')
// Actual: NaN

1 != 1
// Prediction: false, because 1 === 1 
// Actual: false

1 == "1"
// Prediction: true, because there are only two "=", so it's not comparing data types
// Actual: true

1 === "1"
// Prediction: false, because the 1 on the left is a number data type and the 1 on the right is a string 
// Actual: false



// Exercise 6 : Guess The Answers #3
// Instructions:
// For each expression, predict what you think the output will be in a comment(//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console.Note the actual output in a comment and compare it with your prediction.



// What is the output of each of the expressions below ?
5 + "34"
// Prediction: '534', because 34 is a string
// Actual: '534'

5 - "4"
// Prediction: 1, because for some reason subtraction works between numbers and strings that have numbers inside of them or 
// Actual: 1

10 % 5
// Prediction: 0, because 10 is divisable by 5 -> therefore no remainder
// Actual: 0

5 % 10
// Prediction: 5, because it is not divisable by 10 so there is a remainder of 5
// Actual: 5

"Java" + "Script"
// Prediction: 'JavaScript', addition like earlier
// Actual: 'JavaScript'

" " + " "
// Prediction: "  ", addition like earlier
// Actual: "  "

" " + 0
// Prediction: ' 0', i think because that's how it seemed to work earlier
// Actual: ' 0'

true + true
// Prediction: true, i honestly have no idea but maybe
// Actual: 2

// notes: makes sense with the values of 0-false and 1-true

true + false
// Prediction: 1 because true-1 and false-0
// Actual: 1

false + true
// Prediction: 1, because true-1 and false-0
// Actual: 1

false - true
// Prediction: -1, becausew false-0 and true-1
// Actual: -1

!true
// Prediction: false, because not true === false
// Actual: false

3 - 4
// Prediction: -1, because they're regular numbers
// Actual:

"Bob" - "bill"
// Prediction: NaN, don't think we can substract two strings made up of words
// Actual: NaN


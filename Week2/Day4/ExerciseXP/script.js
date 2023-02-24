'use strict'

// Exercise 1 : Information
// Instructions:
// Part I: function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you(ie.your name, age, hobbies ect…).
// Call the function.


function infoAboutMe() {
    console.log('My name is Amy, I\'m 22 and I love hiking and kayaking');
}
infoAboutMe()

// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person(ie. “You name is …, you are..years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, you are ${personAge} years old, your favourite colour is ${personFavoriteColor}`);
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


// Exercise 2 : Tips
// Instructions:
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20 %.
// If the bill is between $50 and $200, tip 15 %.
// If the bill is more than $200, tip 10 %.

// Console.log the tip amount and the final bill(bill + tip).

// Call the calculateTip() function.

function calculateTip() {
    let billAmount = +prompt('How much is the bill?')
    let tipAmount
    if (billAmount < 50 && billAmount > 0) {
        tipAmount = billAmount * 0.2
    } else if (billAmount >= 50 && billAmount <= 200) {
        tipAmount = billAmount * 0.15
    } else {
        tipAmount = billAmount * 0.1

    }
    billAmount += tipAmount
    console.log(`tip: ${Math.ceil(tipAmount)}`);

    console.log(`total bill: ${Math.ceil(billAmount)}`)
}

calculateTip()

// Exercise 3 : Find The Numbers Divisible By 23
// Instructions:
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.
// Bonus: Add a parameter divisor to the function.

function isDivisible(divisor) {
    let list = []
    let sum = 0
    for (let i = 0; i <= 500; i++) {
        if ((i % divisor) === 0) {
            list.push(i)
            sum += i
        }
    }
    console.log(`Outcome: ${list.join(' ')}`);
    console.log(`Sum: ${sum}`);
    console.log(`Divisor: ${divisor}`); // added to make it easier to understand the different console logs
}
isDivisible(5)
isDivisible(23)


// Exercise 4 : Shopping List
// Instructions:
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList.In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if ..in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

const shoppingList = ['banana', 'orange', 'apple']

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

function myBill() {
    let bill = 0
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i] in stock) {
            if (stock[shoppingList[i]] > 0) {
                bill += prices[shoppingList[i]]
                stock[shoppingList[i]]--
            } else {
                console.log(`${shoppingList[i]} is out of stock, sorry`)
            }
        }

    }
    console.log(`Your total bill is ${bill}`);
}

myBill()

// Exercise 5 : What’s In My Wallet ?
// Instructions:
// Note: Read the illustration(point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments:
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price(ie.it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price(ie.it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.

const changeRepresentation = [0.25, 0.10, 0.05, 0.01]

function changeEnough(itemPrice, amountOfChange) {
    let sum = 0
    for (let i = 0; i < amountOfChange.length; i++) {
        amountOfChange[i] *= changeRepresentation[i]
        sum += amountOfChange[i]

    }

    if (sum >= itemPrice) {
        return true
    } else {
        return false
    }

}


function displayResult() {
    if (changeEnough(4.25, [25, 20, 5, 0])) {
        console.log('You can afford this item');
    } else {
        console.log('You cannot afford this item');

    }
}

displayResult()

//  Exercise 6 : Vacations Costs
// Instructions:
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night.The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination: 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car.The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5 % discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//     Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//         Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()



function hotelCost() {
    let numOfNights = +prompt('Enter the number of nights you would like to stay at the hotel')
    let hotelPrice
    while (!numOfNights || isNaN(numOfNights)) {
        numOfNights = parseInt(prompt('Please reenter the number of nights you would like to stay at the hotel'))
    }
    hotelPrice = numOfNights * 140
    return hotelPrice
}

function planeRideCost() {
    let destination = prompt('Enter your destination')
    let planeRidePrice

    while (!destination || !isNaN(+destination)) {
        destination = prompt('Please reenter your destination')
    }

    if (destination.toLowerCase() === 'london') {
        planeRidePrice = 183
    } else if (destination.toLowerCase() === 'paris') {
        planeRidePrice = 220
    } else {
        planeRidePrice = 300
    }

    return planeRidePrice


}

function rentalCarCost() {
    let daysCarRental = +prompt('Enter number of days you would like to rent the car')
    let carRentalCost
    while (!daysCarRental || isNaN(daysCarRental)) {
        daysCarRental = +prompt('Please reenter the number of days you would like to rent the car')
    }

    carRentalCost = daysCarRental * 40

    if (daysCarRental > 10) {
        carRentalCost = carRentalCost - (carRentalCost * 0.05)
    }

    return carRentalCost
}

function totalVacationCost() {
    let sum = hotelCost() + planeRideCost() + rentalCarCost()

    console.log(`The total price is $${sum}`)
    console.log(`The car cost: $${rentalCarCost()}, the hotel cost: $${hotelCost()}, the plane tickets cost: $${planeRideCost()}.`)

}


totalVacationCost()
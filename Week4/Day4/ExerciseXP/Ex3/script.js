// Exercise 3: User & Id
// Instructions
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [['user1', 18273], ['user2', 92833], ['user3', 90315]]
// FYI: The number is their ID number.
let userArray = Object.entries(users)
console.log(userArray)


// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [['user1', 36546], ['user2', 185666], ['user3', 180630]]

const newArray = userArray.map(user => [user[0], user[1] * 2])
console.log(newArray)
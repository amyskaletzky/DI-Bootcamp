// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
let promise = Promise.resolve(3)

promise
    .then(console.log)
    .catch((err) => console.log(err))


// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promise2 = Promise.reject('Boo!')

promise2
    .then(console.log)
    .catch((err) => console.log(err))
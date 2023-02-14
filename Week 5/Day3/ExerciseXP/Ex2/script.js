// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

let promise = new Promise((resolve) => {
    setTimeout(function () { resolve('resolved after 4s') }, 4000)
})

promise.then((res) => {
    console.log(res)
})


// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.
let promise2 = Promise.resolve(
    setTimeout(function () { console.log('success') }, 4000)
)

promise2
    .then((res) => {
        console.log(res)
    })
    .catch((err) => console.log('Oops, something went wrong', err))
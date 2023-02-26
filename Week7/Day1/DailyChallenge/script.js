// Part I:
// Use the exported module in a script.js file.
// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b

const { largeNumber } = require('./main.js')
const b = 5;

const sum = largeNumber + b
console.log(sum)

// Part II:
// In the script.js file create a server using the http module(require('http')).
// Create a server instance and bind it at port 3000. Therefore your server should run on http://localhost:3000/. When the server run, you should console.log("I'm listening") in the terminal.
// Set the response header to res.setHeader('Content-Type', 'text/html')(look at this tutorial - Part named “Serving HTML)
// Respond(res.end) with a HTML paragraph saying "My Module is <result from Part I>", and an HTML < h1 > saying “Hi there at the frontend”
const http = require('http')
const server = http.createServer((req, res) => {
    console.log("I'm listening")
    res.setHeader('Content-Type', 'text/html')
    res.end(`<p>My Module is ${sum} </p><h1>Hi there at the frontend</h1>`)
}).listen(3000);
const { getDateTime } = require('./main.js')


const http = require('http')
const server = http.createServer((req, res) => {
    console.log("I'm listening")
    res.setHeader('Content-Type', 'text/html')
    res.end(`<p>The date and time are currently: ${getDateTime()}</p>`)
}).listen(8080);
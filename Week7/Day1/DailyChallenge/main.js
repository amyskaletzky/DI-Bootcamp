// Part I:
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.

const largeNumber = 356;


// Part III:
// In the main.js, create a function that returns the current date and time.Export the module.
function getDateTime() {
    const date = new Date();
    return date
}

// getDateTime()
// Use the exported module in a script.js file.

// Create a server with http and set the response header to 'text/html'.Respond with an HTML paragraph that outputs the current date and time from the exported module.

module.exports = { largeNumber, getDateTime }

// Your server should run on http://localhost:8080/
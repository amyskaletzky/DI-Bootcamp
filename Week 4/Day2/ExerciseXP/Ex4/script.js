// Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function (username) {
    const nav = document.querySelector('nav')
    const div = document.createElement('div')
    const text = document.createTextNode(username)
    const img = document.createElement('img')
    img.src = 'https://images.unsplash.com/photo-1521501271281-fde9b6eb882b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    img.style.width = '60px'
    div.appendChild(text)
    nav.appendChild(div)
    nav.appendChild(img)
})('Alex')
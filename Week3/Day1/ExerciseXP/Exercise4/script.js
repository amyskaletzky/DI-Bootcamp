'use strict'

// In the js file, create an array called allBooks.This is an array of objects.Each object is a book that has 4 keys(ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean(true or false).
// Initiate the array with 2 books of your choice(ie.Add manually 2 books objects in the array)

const allBooks = []

const book1 = {
    title: 'Woven in Moonlight',
    author: 'Isabel Ibañez',
    image: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-12/24/17/asset/0d7df273f391/sub-buzz-11109-1608830847-14.jpg',

    alreadyRead: true
}

const book2 = {
    title: 'Dune',
    author: 'Frank Herbert',
    image: 'https://m.media-amazon.com/images/I/81ym3QUd3KL.jpg',
    alreadyRead: false
}

allBooks.push(book1, book2)


// Requirements: All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table(the HTML table must be added to the < div > created in part 1).


// For each book:
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read.Set the color of the book’s details to red.



function renderBooks() {
    const tbl = document.createElement('table')
    const div = document.querySelector('.listBooks')

    tbl.innerHTML = `<thead>
                        <tr>
                            <th colspan='3'>List of Books</th>
                        </tr>
                        <tr>
                            <th>Book and Author</th>
                            <th>Bookcover</th>
                            <th>Read? true/false</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class='${book1.alreadyRead ? 'red' : ''} '>
                            <td> ${book1.title} written by ${book1.author}</td>
                            <td><img src='${book1.image}'></td>
                            <td>${book1.alreadyRead}</td>
                        </tr >
                        <tr class='${book2.alreadyRead ? 'red' : ''} '>
                            <td>${book2.title} written by ${book2.author}</td>
                            <td><img src='${book2.image}'></td>
                            <td>${book2.alreadyRead}</td>
                        </tr>
                    </tbody > `


    div.appendChild(tbl)



}
renderBooks()


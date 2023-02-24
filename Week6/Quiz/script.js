// 1. Part I: Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM.
//                 * If the number of paragraph added is a multiple of 3, the content of the paragraph is "Hello"
//                    =>  (every 3 there's a hello)
//     * else the content of the paragraph is "New Paragraph" -- > MANDATORY  : use ternary operator
//         * Example: if the paragraph is the 3rd one added, the content should be "Hello"
// --> MANDATORY : Use arrow functions.
// 2. Part II: Add to each new paragraph, an event listener of mouse over.When you hover on a paragraph, the paragraph should become red(ie.color of the text).

const btn = document.querySelector('button')
const container = document.getElementById('container')

let counter = 0
const createNewPara = () => {
    counter++
    const p = document.createElement('p');
    p.addEventListener('mouseover', changeParaColour)
    const textHello = document.createTextNode('Hello');
    const alternateText = document.createTextNode('New Paragraph');

    // if counter amount % 3 = 0 then textHello, else alternateText
    ((counter % 3) === 0 && counter != 0) ? p.appendChild(textHello) : p.appendChild(alternateText);

    container.appendChild(p);
}

btn.addEventListener('click', createNewPara)

const changeParaColour = (e) => {
    console.log(e.target)
    e.target.style.color = 'red'
}

